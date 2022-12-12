/*
 * @Author: xuhua
 * @Date: 2022-12-12 15:54:22
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 15:54:32
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
			path: '/system/dept-manage',
			name: 'SystemDeptManage',
			component: () => import('@/views/system/dept-manage/index.vue'),
			meta: {
				title: '部门管理',
				keepAlive: false,
			},
		},
		{
			path: '/system/user-manage',
			name: 'SystemUserManage',
			component: () => import('@/views/system/user-manage/index.vue'),
			meta: {
				title: '用户管理',
				keepAlive: false,
			},
		},
		{
			path: '/system/role-manage',
			name: 'SystemRoleManage',
			component: () => import('@/views/system/role-manage/index.vue'),
			meta: {
				title: '角色管理',
				keepAlive: false,
			},
		},
		{
			path: '/system/menu-manage',
			name: 'SystemMenuManage',
			component: () => import('@/views/system/menu-manage/index.vue'),
			meta: {
				title: '菜单管理',
				keepAlive: false,
			},
		},
		{
			path: '/system/user-center',
			name: 'SystemUserCenter',
			component: () => import('@/views/system/user-center/index.vue'),
			meta: {
				title: '个人中心',
				keepAlive: false,
			},
		},
	],
}

export default System
