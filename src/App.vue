<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginView from './views/LoginView.vue';
import DashboardView from './views/DashboardView.vue';
</script>

<template>
  <div class="view w-screen h-screen flex items-center justify-center bg-blue-200">
    <LoginView/>
    <!-- <DashboardView/> -->
  </div>
</template>
