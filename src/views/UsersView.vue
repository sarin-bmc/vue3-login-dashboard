<script setup>
import UserBlocks from '../components/UserBlocks.vue'
import { ref, onMounted } from 'vue'
import LoadingIndicator from '../components/common/LoadingIndicator.vue';

const users = ref([])
const isLoading = ref(true)
const getData = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()
  } catch (error) {
    console.log(error)
  } finally {
    if (users.value.length>0) {
      isLoading.value=false;
    }
    console.log(users.value)
  }
}
onMounted(() => getData())
</script>

<template>
  <div class="users w-full h-screen p-20 overflow-y-scroll">
    <LoadingIndicator v-show="isLoading" class="w-full h-full"/>
    <UserBlocks v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>
