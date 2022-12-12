/*
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 13:52:43
 * @FilePath: /vite-vue3-ts-pinia/vite.config.ts
 * @Description:
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createHtmlPlugin } from 'vite-plugin-html'
// 引入viteMockServe
import { viteMockServe } from 'vite-plugin-mock'

// script直接添加name插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// 生产gz文件
import viteCompression from 'vite-plugin-compression'

const resolve = (dir: string) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd())
	return {
		resolve: {
			alias: {
				'@': resolve('src'),
			},
		},
		plugins: [
			vue(),
			AutoImport({
				imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
				dts: 'src/auto-import.d.ts',
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				dirs: ['src/components/'],
				dts: 'src/components.d.ts',
				resolvers: [ElementPlusResolver()],
			}),
			createHtmlPlugin({
				minify: true,
				inject: {
					data: {
						title: env.VITE_TITLE,
					},
				},
			}),
			VueSetupExtend(),
			// /gzip压缩 生产环境生成 .gz 文件
			mode === 'production' &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: 'gzip',
					ext: '.gz',
				}),
			// mock数据,正式环境不使用
			viteMockServe({
				mockPath: './mock',
				prodEnabled: false,
				watchFiles: true,
				injectCode: `
          import { setupProdMockServer } from './mock';
          setupProdMockServer();
        `,
			}),
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "./src/styles/index.scss" as *;`,
				},
			},
		},
		server: {
			port: 8080, //本地启动端口
			open: true,
			host: '0.0.0.0',
			// hmr: {
			//   host: "127.0.0.1",
			//   port: 8080,
			// },
			// // 设置 https 代理
			// proxy: {
			//   "/api": {
			//     target: "",
			//     changeOrigin: true,
			//     rewrite: (path: string) => path.replace(/^\/api/, ""),
			//   },
			// },
		},
	}
})
