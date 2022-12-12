<!--
 * @Author: xuhua
 * @Date: 2022-12-09 14:07:49
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 18:28:30
 * @FilePath: /vite-vue3-ts-pinia/src/views/login/index.vue
 * @Description: 
-->
<template>
	<div>
		登录
		<el-button type="danger" size="small" @click="handleSubmit"> 登录 </el-button>
	</div>
</template>

<script setup lang="ts" name="Login">
import router from '@/router'
import { setToken } from '@/utils/auth'
// login
const handleSubmit = () => {
	console.log('登录')
	setToken('123456')
	router.push('/home')
}
</script>

<style scoped></style>
