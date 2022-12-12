/*
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 16:27:46
 * @FilePath: /vite-vue3-ts-pinia/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { RouteRecordNormalized } from 'vue-router'
import { DEFAULT_LAYOUT } from './base'

// 路由模块化自动导入
const modules = import.meta.glob('./modules/*.ts')

// 格式化路由模块
const formatModules = (_modules: any, result: RouteRecordNormalized[]) => {
	Object.keys(_modules).forEach((key) => {
		const defaultModule = _modules[key].default
		if (!defaultModule) return
		const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
		result.push(...moduleList)
	})
	return result
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, [])

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/index.vue'),
		meta: { title: '登录', keepAlive: false },
	},
	{
		path: '/',
		name: 'Layout',
		component: DEFAULT_LAYOUT,
		children: [
			{
				path: '/home',
				name: 'Home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					title: '首页',
					keepAlive: false,
				},
			},
		],
	},
	...appRoutes,
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
