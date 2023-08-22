<script setup>
import PostBlocks from '../components/PostBlocks.vue'
import { ref, onMounted } from 'vue'

const posts = ref([])
const getData = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await response.json()
  } catch (error) {
    console.log(error)
  } finally {
    console.log(posts.value)
  }
}
onMounted(() => getData())
</script>

<template>
  <div class="users w-full h-screen p-20 overflow-y-scroll">
    <PostBlocks v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
