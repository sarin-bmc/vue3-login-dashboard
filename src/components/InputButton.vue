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
      class="border-2 border-black w-full px-3 py-2 rounded-md bg-blue-600 text-white hover:scale-105"
    >
      {{ props.title }}
    </button>
  </div>
</template>
