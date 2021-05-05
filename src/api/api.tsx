import axios from 'axios';
import {UserType} from "../types/types";


export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "64826202-63c5-4c77-b4a0-f211f9af0da1"
		//"API-KEY": "7b5a6a80-149d-4814-892c-933320fe688c"
		// "API-KEY": "42fa95b8-7e24-4183-99c9-b5b101e23553"
	}
});


export enum ResultCodesEnum {
	Success= 0,
	Error = 1
}

export enum ResultCodeForCaptchaEnum {
	CaptchaIsRequired = 10
}


export type GetItemsType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
	data: D
	messages: Array<string>
	resultCode: RC
}