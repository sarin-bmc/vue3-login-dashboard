<script setup>
import PostBlocks from '../components/PostBlocks.vue'
import { ref, onMounted } from 'vue'
import LoadingIndicator from '../components/common/LoadingIndicator.vue'

const posts = ref([])
let isLoading = ref(true)

const getData = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    setTimeout(async () => {}, 500)
    posts.value = await response.json()
  } catch (error) {
    console.log(error)
  } finally {
    console.log(posts.value)
    if (posts.value.length > 1) {
      isLoading.value = false
    }
  }
}
onMounted(() => getData())

const deletePost = async (post_id) => {
  if (confirm('Do you really want to delete?')) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`, {
        method: 'DELETE'
      })
      console.log(post_id)
      delete posts.value[post_id]
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<template>
  <LoadingIndicator v-show="isLoading" class="w-full h-full" />
  <div class="users w-full h-screen p-20 overflow-y-scroll">
    <PostBlocks v-for="post in posts" :key="post.id" :post="post" @deletePost="deletePost" />
  </div>
</template>
