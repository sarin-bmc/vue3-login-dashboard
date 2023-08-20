<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  title: String,
  routeto: String
})
</script>

<template>
  <router-link :to="routeto">
    <div
      class="dashboard-menu-option bg-blue-300 rounded-2xl my-5 flex items-center justify-center p-5 border-collapse hover:scale-105 cursor-pointer"
    >
      <span>{{ props.title }}</span>
    </div>
  </router-link>
</template>
