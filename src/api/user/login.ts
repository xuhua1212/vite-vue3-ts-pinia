/*
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-11-22 14:23:22
 * @FilePath: /vite-vue3-ts-pinia/src/api/user/login.ts
 * @Description:
 */
import request from '@/utils/request'

/**
 * 登录
 */
// eslint-disable-next-line @typescript-eslint/ban-types
interface IResponseType<T = {}> {
	code: number
	status?: number
	message: string
	data: T
}

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
