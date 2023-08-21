<script setup>
import InputButton from '../components/InputButton.vue'
import { store } from '../stores/user.js'
import router from '@/router'



const handleLogout=()=>{
  store.isAuthenticated = false;
  localStorage.removeItem('userData')
  router.push('/login')
}
</script>

<template>
  <div class="users w-full h-full p-20">
    <div class="w-full p-10 flex items-center justify-between bg-blue-100 rounded-2xl text-black">
      <span class="username">User Name</span>
      <button type="button" class="cursor-pointer hover:scale-105">Edit</button>
    </div>
    <InputButton title="LogOut" @click="handleLogout" />
  </div>
</template>
