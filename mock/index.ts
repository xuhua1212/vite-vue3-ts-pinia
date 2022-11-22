/*
 * @Author: xuhua
 * @Date: 2022-11-22 13:45:58
 * @LastEditors: xuhua
 * @LastEditTime: 2022-11-22 13:55:18
 * @FilePath: /vite-vue3-ts-pinia/mock/index.ts
 * @Description:
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import test from './data/test'
const mocks = [...test]
export function setupProdMockServer() {
	createProdMockServer(mocks)
}
