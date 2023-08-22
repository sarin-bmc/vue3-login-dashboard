<script setup>
const props = defineProps({
  user: Object
})
</script>

<template>
  <div class="w-full p-10 flex justify-between bg-blue-100 rounded-2xl text-black mb-2">
    <div class="content grid-col-1">
      <div class="name p-1">Name: {{ props.user.name }}</div>
      <div class="username p-1">Username: {{ props.user.username }}</div>
      <div class="email p-1">Email: {{ props.user.email }}</div>
      <div class="website p-1" target="_blank">
        Website: <a :href="props.user.website" class="text-blue-500">{{ props.user.website }}</a>
      </div>
    </div>
    <button type="button" class="cursor-pointer hover:scale-105">Edit</button>
  </div>
</template>
