/*
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-11-18 17:47:25
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

const resolve = (dir: string) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	console.log('defineConfig ~  command, mode', command, mode)
	const env = loadEnv(mode, process.cwd())
	console.log('defineConfig ~ env', env)
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
		],
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
