/*
 * @Author: xuhua
 * @Date: 2022-11-18 17:12:00
 * @LastEditors: xuhua
 * @LastEditTime: 2023-01-03 11:11:55
 * @FilePath: /vite-vue3-ts-pinia/types/global.d.ts
 * @Description: 全局声明文件
 */

interface IResponseType<T> {
	code: number
	status?: number
	message: string
	data: T
}
interface NavTabItem {
	name: string
	path: string
	componentName: string
}
