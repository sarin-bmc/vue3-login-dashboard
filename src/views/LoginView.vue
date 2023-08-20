<script setup>
import InputButton from '../components/InputButton.vue'
import InputFeild from '../components/InputFeild.vue'
</script>

<template>
  <div class="w-fit h-fit flex flex-col items-center justify-center m-20 p-20 rounded-2xl bg-white">
    <div class="page-title text-xl mb-10">Login Page</div>
    <InputFeild title="Email" type="email" />
    <InputFeild title="Password" type="password" />
    <InputButton title="Login" routeto="/dashboard" />
  </div>
</template>
