<!--
 * @Author: xuhua
 * @Date: 2022-12-12 17:16:23
 * @LastEditors: xuhua
 * @LastEditTime: 2023-01-03 11:04:37
 * @FilePath: /vite-vue3-ts-pinia/src/layout/components/SideBar.vue
 * @Description: 菜单栏组件
-->
<template>
	<el-aside class="sidebar">
		<el-menu default-active="1-1" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
			<el-sub-menu index="1">
				<template #title>
					<el-icon><location /></el-icon>
					<span>Navigator One</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="1-1">item one</el-menu-item>
					<el-menu-item index="1-2">item two</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group>
					<el-menu-item index="1-3">item three</el-menu-item>
				</el-menu-item-group>
				<el-sub-menu index="1-4">
					<el-menu-item index="1-4-1">item one</el-menu-item>
				</el-sub-menu>
			</el-sub-menu>
			<el-menu-item index="2">
				<el-icon><icon-menu /></el-icon>
				<template #title>Navigator Two</template>
			</el-menu-item>
			<el-menu-item index="3" disabled>
				<el-icon><document /></el-icon>
				<template #title>Navigator Three</template>
			</el-menu-item>
			<el-menu-item index="4">
				<el-icon><setting /></el-icon>
				<template #title>Navigator Four</template>
			</el-menu-item>
		</el-menu>
	</el-aside>
</template>

<script setup lang="ts">
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.sidebar {
	width: $sider-width;
}
.el-menu {
	height: 100%;
}
</style>
