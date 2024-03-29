<template>
	<div
		v-if="isOpen"
		class="modal active"
		@click.self="dialogClose"
		@keyup.esc="dialogClose"
		tabindex="0"
	>
		<div class="modal__dialog">
			<div class="modal__header">
				<div class="modal__title">
					Редактировать категории id: {{ idCategory }}
				</div>
				<div class="modal__close" @click="dialogClose">&times;</div>
			</div>
			<form @submit.prevent="dialogAddSuccess" class="modal__form">
				<div class="modal__body">
					<div class="form__row">
						<div class="form__col">
							<div class="form__group_max">
								<label for="title">Заголовок <span>*</span></label>
							</div>
							<div class="form__group_max mb-6">
								<input
									v-model="v$.title.$model"
									id="title"
									type="text"
									placeholder="Заголовок"
								/>
								<template v-if="v$.title.$dirty">
									<div
										v-for="error of v$.title.$silentErrors"
										:key="error.$message"
										class="form__error"
									>
										{{ error.$message }}
									</div>
								</template>
							</div>
							<div class="form__group_max">
								<label for="slug">Slug<span>*</span></label>
							</div>
							<div class="form__group_max mb-6">
								<input
									v-model="v$.slug.$model"
									id="slug"
									type="text"
									placeholder="Slug"
								/>
								<template v-if="v$.slug.$dirty">
									<div
										v-for="error of v$.slug.$silentErrors"
										:key="error.$message"
										class="form__error"
									>
										{{ error.$message }}
									</div>
								</template>
							</div>
						</div>
						<div class="form__col">
							<div class="form__group_max">
								<label for="sort">Сортировка <span>*</span></label>
							</div>
							<div class="form__group_max mb-6">
								<input
									v-model="v$.sort.$model"
									id="sort"
									type="number"
									min="0"
									placeholder="Сортировка"
									required
								/>
								<template v-if="v$.sort.$dirty">
									<div
										v-for="error of v$.sort.$silentErrors"
										:key="error.$message"
										class="form__error"
									>
										{{ error.$message }}
									</div>
								</template>
							</div>
							<div class="form__group_max">
								<label for="icon">Иконка <span>*</span></label>
							</div>
							<div class="form__group">
								<input
									v-model="v$.icon.$model"
									id="icon"
									type="text"
									class="form__input form__input_max form__input_icon"
									placeholder="Иконка"
									readonly
								/>
								<icon-add
									:icons="editCategory.icon"
									@update:icons="editCategory.icon = $event"
								></icon-add>
							</div>
							<template v-if="v$.icon.$dirty">
								<div
									v-for="error of v$.icon.$silentErrors"
									:key="error.$message"
									class="form__error"
								>
									{{ error.$message }}
								</div>
							</template>
						</div>
					</div>
				</div>
				<div class="modal__footer">
					<div class="modal__action">
						<button class="btn modal__btn_save" type="submit">
							<i class="las la-save"></i> Сохранить
						</button>
						<button
							class="btn_outline modal__btn_close"
							@click.prevent="dialogClose"
						>
							Закрыть
						</button>
					</div>
					<div class="modal__delete">
						<button
							class="btn_delete modal__btn_delete"
							@click.prevent="removeDialogOpen(idCategory, editCategory.title)"
						>
							<i class="las la-trash-alt"></i>
							Удалить
						</button>
					</div>
				</div>
			</form>
		</div>
		<the-remove-dialog
			v-if="removeDialog.status"
			:is-open="removeDialog.status"
			@success="removeDialogYes"
			@close="removeDialogNo"
		>
		</the-remove-dialog>
	</div>
</template>

<script setup>
import { onMounted, reactive, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useSettingStore } from '@/stores/settings';
import links from '@/service/endpoints/links';
import IconAdd from '@/components/Icons/IconAdd.vue';
import TheRemoveDialog from '@/components/TheRemoveDialog.vue';
import useVuelidate from '@vuelidate/core';
import {
	minLength,
	required,
	helpers,
	numeric,
	minValue,
} from '@vuelidate/validators';

const userStore = useUserStore();
const settingStore = useSettingStore();
const router = useRouter();
const emit = defineEmits(['close', 'success']);
const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true,
		default: false,
	},
	idCategory: {
		type: Number,
		required: true,
	},
});
const form = ref(false);
const editCategory = reactive({
	id: null,
	isMain: true,
	title: null,
	slug: null,
	icon: '',
	sort: 1,
});
const removeDialog = reactive({
	status: false,
	id: null,
	title: null,
});

// Валидация
const requiredNameLength = ref(2);
const rules = computed(() => ({
	title: {
		required: helpers.withMessage(`Поле не заполнено`, required),
		minLength: helpers.withMessage(
			`Минимальная длина: 2 символа`,
			minLength(requiredNameLength.value)
		),
	},
	slug: {
		required: helpers.withMessage(`Поле не заполнено`, required),
		minLength: helpers.withMessage(
			`Минимальная длина: 2 символа`,
			minLength(requiredNameLength.value)
		),
	},
	sort: {
		required: helpers.withMessage(`Поле не заполнено`, required),
		numeric: helpers.withMessage(`Вы можете ввести только цифры`, numeric),
		minValue: helpers.withMessage(
			`Значение не должно быть отрицательным`,
			minValue(0)
		),
	},
	icon: {
		required: helpers.withMessage(`Поле не заполнено`, required),
		minLength: helpers.withMessage(
			`Минимальная длина: 2 символа`,
			minLength(2)
		),
	},
}));

const v$ = useVuelidate(rules, editCategory);

/**
 * Получаем данные главной категории
 * @param {number} id - ID категории
 */
const getCategory = async (id) => {
	await links
		.getCategory(id)
		.then((response) => {
			if (response.data?.data.attributes) {
				editCategory.title = response.data?.data.attributes.title;
				editCategory.slug = response.data?.data.attributes.slug;
				editCategory.icon = response.data?.data.attributes.icon;
				editCategory.sort = response.data?.data.attributes.sort;
			}
			return response;
		})
		.catch((error) => {
			if (error.response.data.error?.details?.errors[0]?.path[0] === 'slug') {
				settingStore.addToast(
					'error',
					`Поле slug с таким значением уже существует, slug должно быть уникальным значением`
				);
			} else {
				settingStore.addToast('error', error.response.data.error?.message);
			}
			return console.log(error);
		});
};

/**
 * Изменение категории
 * @param {number} id - ID категории
 * @param {string} title - Заголовок категории
 * @param {string} slug - slug категории
 * @param {string} icon - Иконка категории
 * @param {number} sort - Сортировка категории
 * @param {number} userId - ID пользователя
 */
const editCategorySend = async (id, title, slug, icon, sort, userId) => {
	await links
		.putMainCategory(id, title, slug, icon, sort, userId)
		.then((response) => {
			settingStore.addToast('success', `Категория '${title}' изменена`);
			emit('success');
			resetFields();
			router.push('/');
		})
		.catch((error) => {
			settingStore.addToast('error', error.response.data.error?.message);
			return console.log(error);
		});
};

/**
 * Удаление категории
 * @param {number} id - ID категории
 * @param {string} title - Название категории
 */
const removeCategory = async (id, title) => {
	await links
		.delCategory(id)
		.then((response) => {
			settingStore.addToast('error', `Категория '${title}' удалена`);
			emit('success');
			resetFields();
			router.push('/');
		})
		.catch((error) => {
			settingStore.addToast('error', error.response.data.error?.message);
			return console.log(error);
		});
};

/**
 * Закрытие окна формы
 */
const dialogClose = () => {
	emit('close');
};

/**
 * Сохранение ссылки
 */
const dialogAddSuccess = () => {
	v$.value.$touch();
	if (v$.value.$error) return;
	if (
		!v$.value.$error &&
		props.idCategory &&
		editCategory.title &&
		editCategory.slug &&
		editCategory.icon &&
		editCategory.sort > -1
	) {
		editCategorySend(
			props.idCategory,
			editCategory.title,
			editCategory.slug.toLowerCase(),
			editCategory.icon,
			editCategory.sort,
			userStore.userData.id
		);
	}
};

/**
 * Сброс полей формы в значение по умолчанию
 */
const resetFields = () => {
	editCategory.title = null;
	editCategory.slug = null;
	editCategory.icon = null;
	editCategory.sort = 1;
};

/**
 * Открытие окна подтверждения удаления
 * @param {number} id - Id
 * @param {string} title  - заголовок
 */
const removeDialogOpen = (id, title) => {
	removeDialog.status = true;
	removeDialog.id = id;
	removeDialog.title = title;
};

/**
 * Подтверждение действия
 */
const removeDialogYes = () => {
	removeCategory(removeDialog.id, removeDialog.title);
	removeDialog.status = false;
	removeDialog.id = null;
	removeDialog.title = null;
};

/**
 * Отмена действия
 */
const removeDialogNo = () => {
	removeDialog.status = false;
	removeDialog.id = null;
	removeDialog.title = null;
};

onMounted(() => {
	getCategory(props.idCategory);
});

watch(
	() => props.idCategory,
	(newV, oldV) => {
		getCategory(props.idCategory);
	}
);
</script>

<style lang="scss" scoped></style>
