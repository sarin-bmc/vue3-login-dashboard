<script setup>
import InputButton from '../components/InputButton.vue';
import InputFeild from '../components/InputFeild.vue';


</script>

<template>
    <div class="w-fit h-full flex flex-col items-center justify-center">
        <div class="page-title text-xl m-5 mb-10">Login Page</div>
        <InputFeild title="Email" type="email"/>
        <InputFeild title="Password" type="password"/>
        <InputButton title="Login" />
    </div>
</template>