import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home,
		redirect: '/favorite',
		meta: {
			title: 'Главная',
			layout: 'main',
			auth: true,
			isAdmin: true,
		},
		children: [
			{
				path: ':slug',
				component: () => import('../components/Category/ViewCategory.vue'),
				props: true,
				meta: {
					layout: 'main',
					auth: true,
					isAdmin: true,
				},
			},
			/* 	{
				path: '/favorite',
					alias: '/',
				component: () => import('../components/Category/ViewCategory.vue'),
				props: true,
				meta: {
					layout: 'main',
					auth: true,
					isAdmin: true,
				},
			}, */
		],
	},
	{
		name: 'Info',
		path: '/info',
		component: () => import('../views/Info.vue'),
		meta: {
			title: 'Информация',
			layout: 'main',
			auth: true,
			isAdmin: true,
		},
	},
	{
		name: 'Auth',
		path: '/auth',
		component: Auth,
		meta: {
			title: 'Авторизация',
			layout: 'auth',
			auth: false,
			isAdmin: false,
		},
	},
	{
		path: '/:notFound(.*)',
		component: NotFound,
		meta: {
			title: 'Ошибка 404',
			layout: 'auth',
			auth: false,
			isAdmin: false,
			breadcrumbs: [
				{
					title: 'Ошибка 404',
					disabled: true,
					href: '',
				},
			],
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = `${to.meta.title} - Bookmarks`;
	} else {
		document.title = `Bookmarks`;
	}
	//	console.log('slug: ', to.params.slug);
	next();
});

export default router;
