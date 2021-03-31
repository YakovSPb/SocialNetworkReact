import axios from 'axios';
import {ProfileType} from "../types/types";


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

	follow(userId: number) {
		return instance.post(`follow/${userId}`)
},

	unfollow(userId: number) {
		return instance.delete(`follow/${userId}`)
},

	getProfile(userId: number) {
		console.warn('Obsolete method. Please use profileAPI');
		return profileAPI.getProfile(userId);
	},

}



export const profileAPI = {
	getProfile(userId: number) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId: number) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, {status: status });
	},
	savePhoto(photoFile: any) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
	saveProfile(profile: ProfileType) {
		return instance.put(`profile`, profile);
	}
}

export enum ResultCodesEnum {
	Success= 0,
	Error = 1
}

export enum ResultCodeForCaptcha {
	CaptchaIsRequired = 10
}


type MeResponseTypes = {
	data: {
		id: number
		email: string
		login: string
	}
	resultCode: ResultCodesEnum
	messages: Array<string>
}


type LoginResponseTypes = {
	data: {
		userId: number
	}
	resultCode: ResultCodesEnum | ResultCodeForCaptcha
	messages: Array<string>
}


export const authAPI = {
	me() {
   		return instance.get<MeResponseTypes>(`auth/me`).then(res => res.data);
	},
	login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
   		return instance.post<LoginResponseTypes>(`auth/login`, { email, password, rememberMe, captcha })
			.then(res=> res.data)
	},
	logout() {
   		return instance.delete(`auth/login`);
	},
}


export const securityAPI = {
	getCaptchaUrl() {
   		return instance.get(`security/get-captcha-url`);
	}
}

