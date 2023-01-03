/*
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2023-01-03 11:12:30
 * @FilePath: /vite-vue3-ts-pinia/src/api/user/login.ts
 * @Description:
 */
import request from '@/utils/request'
/**
 * 登录
 */
interface UserResponseType {
	[x: string]: any
	id: string
	name: string
	age: number
	address: string
	city: string
	province: string
	email: string
	phone: string
	regin: string
	url: string
	date: string
}

export const getUserList = () => {
	return request<IResponseType<UserResponseType>>({
		url: '/api/getUsers',
		method: 'get',
	})
}
