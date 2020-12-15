import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "7b5a6a80-149d-4814-892c-933320fe688c"
		// "API-KEY": "42fa95b8-7e24-4183-99c9-b5b101e23553"
	}
});

export const usersAPI = {

	getUsers(currentPage = 1, pageSize = 10) {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
	.then(response => response.data);
},

	follow(userId) {
		return instance.post(`follow/${userId}`)
},

	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
},

	getProfile(userId) {
		return instance.get(`/profile/` + userId);
	},

}

export const authAPI = {
	me() {
   return instance.get(`auth/me`);
	}
}

