/*
 * @Author: xuhua
 * @Date: 2022-11-22 13:47:01
 * @LastEditors: xuhua
 * @LastEditTime: 2022-11-22 13:53:31
 * @FilePath: /vite-vue3-ts-pinia/mock/data/test.ts
 * @Description:
 */
import { MockMethod } from 'vite-plugin-mock'
import Mock, { Random } from 'mockjs'
export default [
	{
		url: '/api/getUsers',
		method: 'get',
		response: () => {
			return {
				code: 200,
				message: 'ok',
				data: Mock.mock({
					'rows|10': [
						{
							id: '@guid',
							name: '@cname',
							age: Random.integer(1, 100),
							address: '@county',
							city: '@city',
							province: '@province',
							email: Random.email(),
							phone: /^1[0-9]{10}$/,
							regin: '@region',
							url: '@url',
							date: Random.date('yyyy-MM-dd'),
						},
					],
				}),
			}
		},
	},
] as MockMethod[]
