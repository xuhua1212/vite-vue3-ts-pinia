/*
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-06 14:37:39
 * @FilePath: /vite-vue3-ts-pinia/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
const baseRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: 'home',
				name: 'Home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					title: '首页',
					icon: 'el-icon-s-home',
				},
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes: baseRoutes,
})

export default router
