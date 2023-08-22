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

const deletePost = async (post) => {
  if (confirm('Do you really want to delete?')) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'DELETE'
      })
      console.log(post.id)
      delete posts.value[post.id]
      let updatePosts = posts.value.filter((posts) => posts.id !== post.id);
      posts.value = updatePosts;
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
