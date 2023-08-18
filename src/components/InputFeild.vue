<script setup>
const props = defineProps({
  title: String,
  type: String
})
</script>

<template>
  <div class="input-wrapper m-3">
    <p class="text-lg">{{ props.title }}</p>
    <input
      :type="type"
      class="text-black px-3 py-2 border-2 border-black rounded-md "
      :placeholder="title"
    />
  </div>
</template>
