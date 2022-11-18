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

const storename = useUserStore()
const { x, y } = useMouse()
const tableData = reactive([
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
		age: 18,
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
		age: 18,
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
		age: 18,
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
		age: 18,
	},
])

const updateAge = () => {
	tableData.forEach((item: { age: number }) => item.age++)
}
</script>

<style scoped></style>
