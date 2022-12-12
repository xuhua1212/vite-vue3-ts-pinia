<!--
 * @Author: xuhua
 * @Date: 2022-12-06 14:30:31
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 17:55:19
 * @FilePath: /vite-vue3-ts-pinia/src/layout/index.vue
 * @Description: 
-->
<template>
	<div class="layout">
		<el-container>
			<SideBar></SideBar>
			<el-main class="layout-main">
				<HeaderBar></HeaderBar>
				<!-- <TabBar></TabBar> -->
				<AppMain></AppMain>
			</el-main>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import HeaderBar from './components/HeaderBar.vue'
import AppMain from './components/AppMain.vue'
import TabBar from './components/TabBar.vue'
</script>

<style lang="scss" scoped>
.layout {
	height: 100%;
	width: 100%;
	flex-direction: row;
	.el-container {
		height: 100%;
	}
	.layout-main {
		width: 100%;
		height: 100%;
	}
}
</style>
