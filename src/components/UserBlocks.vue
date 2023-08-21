<script setup>
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
    <div v-for="user in users" :key="user.id" class="w-full p-10 flex justify-between bg-blue-100 rounded-2xl text-black mb-2">
      <div class="content grid-col-1">
          <div class="name p-1">Name: {{ user.name }}</div>
          <div class="username p-1">Username: {{ user.username }}</div>
          <div class="email p-1">Email: {{ user.email }}</div>
          <div class="website p-1">Website: <a :href="user.website" class="text-blue-500">{{ user.website }}</a></div>
        </div>
      <button type="button" class="cursor-pointer hover:scale-105">Edit</button>
    </div>
</template>