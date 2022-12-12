/*
 * @Author: xuhua
 * @Date: 2022-12-12 16:08:34
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 16:24:16
 * @FilePath: /vite-vue3-ts-pinia/src/utils/nprogress.ts
 * @Description:进度条
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 进度条配置项
NProgress.configure({
	easing: 'ease', // 动画方式
	speed: 1000, // 递增进度条的速度
	showSpinner: false, // 是否显示加载ico
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3, // 更改启动时使用的最小百分比
	parent: 'body', //指定进度条的父容器
})

export const NPStart = () => {
	NProgress.start()
}

export const NPClose = () => {
	NProgress.done()
}
