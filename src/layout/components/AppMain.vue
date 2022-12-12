<!--
 * @Author: xuhua
 * @Date: 2022-12-06 14:40:56
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 18:18:35
 * @FilePath: /vite-vue3-ts-pinia/src/layout/components/AppMain.vue
 * @Description: 
-->
<template>
	<div class="app-warp">
		<router-view>
			<template #default="{ Component, route }">
				<transition :name="settingStore.transitionName" mode="out-in" appear>
					<keep-alive :include="tabBarStore.cacheList">
						<component :is="Component" :key="route.path" />
					</keep-alive>
				</transition>
			</template>
		</router-view>
	</div>
</template>

<script setup lang="ts">
import { useSettingStore, useTabBarStore } from '@/store'
const settingStore = useSettingStore()
const tabBarStore = useTabBarStore()
</script>

<style scoped lang="scss">
.app-warp {
	height: calc(100vh - $header-height - 40px);
	background-image: linear-gradient(0deg, #fff1eb 0%, #ace0f9 100%);
	padding: 20px;
}
</style>
