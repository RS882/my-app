import axios from "axios"

const instance = axios.create({
	withCredentials: true,
	headers: { 'API-KEY': '578be10a-aad1-411e-a770-f4db95af6204' },
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
})

export const userAPI = {
	getUser(currentPage = 1, pageSize = 5) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(respons => respons.data)
	}
}