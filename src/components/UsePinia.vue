<template>
  <div>
    {{ userStore.name }}
    <button @click="handleClick">
      点我
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()

const handleClick = () => {
  userStore.setName(userStore.name == 'John' ? '张三' : 'John')
}
</script>

<style scoped>

</style>