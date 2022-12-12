<!--
 * @Author: xuhua
 * @Date: 2022-12-12 17:17:00
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 18:25:30
 * @FilePath: /vite-vue3-ts-pinia/src/layout/components/HeaderBar.vue
 * @Description: 头部组件
-->
<template>
	<div class="header">
		头部
		<el-button @click="handleExit"> 退出 </el-button>
	</div>
</template>

<script setup lang="ts">
import router from '@/router'
import { removeToken } from '@/utils/auth'

const handleExit = () => {
	removeToken()
	location.reload()
	console.log('退出')
}
</script>

<style scoped lang="scss">
.header {
	height: $header-height;
	width: 100%;
	background-color: #409eff;
	color: #fff;
	line-height: $header-height;
	text-align: center;
}
</style>
