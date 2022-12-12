/*
 * @Author: xuhua
 * @Date: 2022-12-12 16:02:33
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 16:24:51
 * @FilePath: /vite-vue3-ts-pinia/src/permission.ts
 * @Description:
 */
import router from '@/router'
import { NPStart, NPClose } from '@/utils/nprogress'
import { getToken } from '@/utils/auth'
const whiteList = ['/login', '/404', '/401']

router.beforeEach(async (to, from, next) => {
	NPStart()
	const hasToken = getToken()
	// 如果有token
	if (hasToken) {
		if (to.path === '/login') {
			next({ path: '/' })
			NPClose()
		} else {
			next()
		}
	} else {
		// 如果没有token
		if (whiteList.includes(to.path)) {
			next()
		} else {
			next(`/login?redirect=${to.path}`)
			NPClose()
		}
	}
})

router.afterEach(() => {
	NPClose()
})
