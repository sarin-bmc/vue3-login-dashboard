<script setup>
const props = defineProps({
  title: String,
  routeto: String,
  type: String
})
</script>

<template>
  <div class="button-wrapper w-full p-3 mt-5">
    <button class="w-full p-3 rounded-md bg-blue-500 text-white hover:scale-105" :type="type">
      {{ props.title }}
    </button>
  </div>
</template>
