<script setup>
import UserBlocks from '../components/UserBlocks.vue'
import { ref, onMounted } from 'vue'

const users = ref([])
const getData = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()
  } catch (error) {
    console.log(error)
  }finally{
    console.log(users.value);
  }
}
onMounted(() => getData());
</script>

<template>
  <div class="users w-full h-screen p-20 overflow-y-scroll" >
    <UserBlocks v-for="user in users" :key="user.id" :user="user"/>
  </div>
</template>
