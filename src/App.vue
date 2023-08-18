<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginView from './views/LoginView.vue';
</script>

<template>
  <div class="view flex items-center justify-center m-20">
    <LoginView/>
  </div>
</template>
