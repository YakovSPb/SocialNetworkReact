import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "7b5a6a80-149d-4814-892c-933320fe688c"
		// "API-KEY": "42fa95b8-7e24-4183-99c9-b5b101e23553"
	}
});

export const userAPI = {
	
	getUsers(currentPage = 1, pageSize = 10) {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
	.then(response => response.data);
},

  loginUp() {
  return axios.get(`auth/me`)
  .then(response => response.data);
},

	getFollow(id) {
	return axios.post(`follow/${id}`, {})
		.then(response => response.data);
},

	getUnfollow(id) {
		return axios.delete(`follow/${id}`)
			.then(response => response.data);
}
}

