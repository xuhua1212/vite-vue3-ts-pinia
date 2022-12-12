/*
 * @Author: xuhua
 * @Date: 2022-12-12 16:13:53
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 18:28:08
 * @FilePath: /vite-vue3-ts-pinia/src/utils/auth.ts
 * @Description:
 */
import { setStorage, getStorage, removeStorage } from './storage'

const TOKEN_KEY = 'token'

const isLogin = () => {
	return !!getStorage(TOKEN_KEY)
}

const getToken = () => {
	// return getStorage(TOKEN_KEY)
	return localStorage.getItem('token')
}

const setToken = (token: string) => {
	// setStorage(TOKEN_KEY, token)
	localStorage.setItem(TOKEN_KEY, token)
}
const removeToken = () => {
	// removeStorage(TOKEN_KEY)
	localStorage.removeItem('token')
}

export { isLogin, getToken, setToken, removeToken }
