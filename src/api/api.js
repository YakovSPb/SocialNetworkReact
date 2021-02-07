import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "64826202-63c5-4c77-b4a0-f211f9af0da1"
		//"API-KEY": "7b5a6a80-149d-4814-892c-933320fe688c"
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
		console.warn('Obsolete method. Please use profileAPI');
		return profileAPI.getProfile(userId);
	},

}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status: status });
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	}
}

export const authAPI = {
	me() {
   		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false) {
   		return instance.post(`auth/login`, { email, password, rememberMe });
	},
	logout() {
   		return instance.delete(`auth/login`);
	},
}

