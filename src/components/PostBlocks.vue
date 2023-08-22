<script setup>
import { ref, onMounted } from 'vue'
import CommentBlocks from './common/CommentBlocks.vue'
const props = defineProps({
  post: Object
})

let showComments = ref(false)
const comments = ref([])
const getData = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    comments.value = await response.json()
  } catch (error) {
    console.log(error)
  } finally {
    console.log(comments.value)
  }
}
</script>

<template>
  <div class="w-f p-5 grid grid-cols-1 bg-blue-100 rounded-2xl mb-2">
    <div class="w-full flex justify-between text-black p-5">
      <div class="content grid grid-col-1">
        <div class="name p-1">{{ props.post.title }}</div>
      </div>
      <button type="button" class="cursor-pointer hover:scale-105">Edit</button>
    </div>
    <div class="comments w-full grid-col-1 pl-5">
      <div class="toggle-button w-fit" @click="showComments = !showComments">
        <div
          v-show="!showComments"
          @click="getData"
          class="comment-toggle text-xs p-1 cursor-pointer hover:text-gray-600 group flex items-center"
        >
          <svg
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 pr-1 group-hover:fill-gray-600"
          >
            <title />
            <path
              d="M81.8457,25.3876a6.0239,6.0239,0,0,0-8.45.7676L48,56.6257l-25.396-30.47a5.999,5.999,0,1,0-9.2114,7.6879L43.3943,69.8452a5.9969,5.9969,0,0,0,9.2114,0L82.6074,33.8431A6.0076,6.0076,0,0,0,81.8457,25.3876Z"
            />
          </svg>
          show comments
        </div>
        <div
          v-show="showComments"
          class="comment-toggle text-xs p-1 cursor-pointer hover:text-gray-600 group flex items-center"
        >
          <svg
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 pl-1 rotate-180 group-hover:fill-gray-600"
          >
            <title />
            <path
              d="M81.8457,25.3876a6.0239,6.0239,0,0,0-8.45.7676L48,56.6257l-25.396-30.47a5.999,5.999,0,1,0-9.2114,7.6879L43.3943,69.8452a5.9969,5.9969,0,0,0,9.2114,0L82.6074,33.8431A6.0076,6.0076,0,0,0,81.8457,25.3876Z"
            />
          </svg>
          hide comments
        </div>
      </div>
      <div v-show="showComments" class="comment-contents grid-cols-1 ">
        <CommentBlocks
          v-for="comment in comments.slice(0, 5)"
          :key="comment.id"
          :comment="comment"

          class="border-b border-separate border-blue-200"
        />
      </div>
    </div>
  </div>
</template>
