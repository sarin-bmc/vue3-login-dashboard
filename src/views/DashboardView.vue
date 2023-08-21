<script setup>
import DashboardMenuBlock from '../components/DashboardMenuBlock.vue'
import { RouterView } from 'vue-router'
import InputButton from '../components/InputButton.vue'
import { store } from '../stores/user.js'
import router from '@/router'

const handleLogout = () => {
  store.isAuthenticated = false
  localStorage.removeItem('userData')
  router.push('/login')
}
</script>

<template>
  <div class="w-screen h-screen grid grid-cols-4">
    <div class="p-10">
        <div>

            <DashboardMenuBlock title="Stats" routeto="/" />
            <DashboardMenuBlock title="Users" routeto="/users" />
        </div>
        <InputButton title="LogOut" @click="handleLogout" class="bottom-10 mt-20"/>

    </div>
    <div class="col-span-3">
      <RouterView />
    </div>
  </div>
</template>
