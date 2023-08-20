<script setup>
import DashboardMenuBlock from '../components/DashboardMenuBlock.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-screen h-screen grid grid-cols-4 p-10">
    <div class="">
      <DashboardMenuBlock title="Stats" routeto="/dashboard/" />
      <DashboardMenuBlock title="Users" routeto="/dashboard/users" />
    </div>
    <div class="col-span-3">
      <RouterView />
    </div>
  </div>
</template>
