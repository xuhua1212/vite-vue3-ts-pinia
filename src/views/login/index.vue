<template>
  <div>
    登录
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <h3>useMouse:{{ x }} x {{ y }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()

</script>

<style scoped>

</style>