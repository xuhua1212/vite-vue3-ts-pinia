/*
 * @Author: xuhua
 * @Date: 2022-12-12 16:13:53
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 16:21:00
 * @FilePath: /vite-vue3-ts-pinia/src/utils/auth.ts
 * @Description:
 */
import { setStorage, getStorage, removeStorage } from './storage'

const TOKEN_KEY = 'token'

const isLogin = () => {
	return !!getStorage(TOKEN_KEY)
}

const getToken = () => {
	return getStorage(TOKEN_KEY)
}

const setToken = (token: string) => {
	setStorage(TOKEN_KEY, token)
}
const removeToken = () => {
	removeStorage(TOKEN_KEY)
}

export { isLogin, getToken, setToken, removeToken }
