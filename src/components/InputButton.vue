<script setup>
const props = defineProps({
  title: String,
  type: String
})
</script>

<template>
  <div class="button-wrapper w-full p-3 mt-5">
    <button
      :type="props.type"
      class=" w-full p-3 rounded-md bg-blue-500 text-white hover:scale-105"
    >
      {{ props.title }}
    </button>
  </div>
</template>
