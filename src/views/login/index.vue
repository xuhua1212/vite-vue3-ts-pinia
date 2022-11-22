<!--
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-11-22 14:23:41
 * @FilePath: /vite-vue3-ts-pinia/src/views/login/index.vue
 * @Description: 
-->
<template>
	<div>
		登录
		<el-row class="mb-4">
			<el-button>Default</el-button>
			<el-button type="primary" @click="updateAge">修改</el-button>
			<el-button type="success">Success</el-button>
			<el-button type="info">Info</el-button>
			<el-button type="warning">Warning</el-button>
			<el-button type="danger">Danger</el-button>
		</el-row>
		{{ storename }}
		<h3>useMouse:{{ x }} x {{ y }}</h3>
		<el-table :data="tableData" style="width: 100%" border>
			<el-table-column prop="date" label="Date" width="180" />
			<el-table-column prop="name" label="Name" width="180" />
			<el-table-column prop="address" label="Address" />
			<el-table-column prop="age" label="age" />
		</el-table>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { getUserList } from '@/api/user/login'
const storename = useUserStore()
const { x, y } = useMouse()
let tableData = reactive([])

onMounted(async () => {
	const res = await getUserList()
	tableData = res.data.rows
})

const updateAge = () => {
	tableData.forEach((item: { age: number }) => item.age++)
}
</script>

<style scoped></style>
