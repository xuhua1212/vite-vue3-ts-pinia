<!--
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 16:26:49
 * @FilePath: /vite-vue3-ts-pinia/src/App.vue
 * @Description: 
-->
<template>
	<el-config-provider :size="globalComSize" :locale="zhCn">
		<router-view />
	</el-config-provider>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/store/modules/setting'
// 配置element中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import type { globalComSizeType } from './config/options'

const SettingStore = useSettingStore()
const globalComSize = computed((): globalComSizeType => SettingStore.globalComSize)
</script>

<style lang="scss">
#app {
	position: relative;
	width: 100%;
	height: 100%;
	font-family: Avenir, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
.el-pager li:focus {
	border: none;
}
.el-dropdown:focus {
	border: none;
}
.svg-icon:focus {
	border: none;
}
</style>
