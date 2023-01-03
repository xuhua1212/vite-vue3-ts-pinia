/*
 * @Author: xuhua
 * @Date: 2022-12-12 15:54:22
 * @LastEditors: xuhua
 * @LastEditTime: 2023-01-03 11:08:43
 * @FilePath: /vite-vue3-ts-pinia/src/router/modules/system.ts
 * @Description:
 */
import { DEFAULT_LAYOUT } from '../base'

const System = {
	component: DEFAULT_LAYOUT,
	children: [
		{
			path: '/system',
			name: 'SystemMain',
			component: () => import('@/views/system/index.vue'),
			meta: {
				title: '系统管理',
				keepAlive: false,
			},
		},
		{
			path: '/system/deptManage',
			name: 'deptManage',
			component: () => import('@/views/system/deptManage/index.vue'),
			meta: {
				title: '部门管理',
				keepAlive: false,
			},
		},
	],
}

export default System
