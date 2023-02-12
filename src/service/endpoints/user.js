import api from '../api';

const user = {
	postAuth: (data) => api.post(`/api/auth/local`, data),
	getAuth: () => api.get(`/api/users/me`),
};

export default user;
