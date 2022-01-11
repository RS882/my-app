import axios from "axios"


const instance = axios.create({
	// withCredentials: true,
	//  headers: { 'API-KEY': '578be10a-aad1-411e-a770-f4db95af6204' },
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});


export const userAPI = {
	getUser: (currentPage = 1, pageSize = 5) => instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(respons => respons.data),

	followUser: id => instance.post(`follow/${id}`, {})
		.then(respons => respons.data),

	unfollowUser: id => instance.delete(`follow/${id}`)
		.then(respons => respons.data),
}


export const profileAPI = {
	getProfile: (userId, meId = 2) => instance.get(`profile/${userId ? userId : meId}`)
		.then(respons => respons.data),

	getStatus: (userId) => instance.get(`profile/status/${userId}`)
		.then(respons => respons.data),

	updateStatus: (userStatus) => instance.put(`profile/status`, { status: userStatus })
		.then(respons => respons.data),
}

export const loginAPI = {
	getAuthUser: () => instance.get(`auth/me`)
		.then(respons => respons.data),

	loginUser: (data) => instance.post(`/auth/login`, {
		email: data.email,
		password: data.password,
		rememberMe: data.rememberMe,
	})
		.then(respons => respons.data),
}

