<script setup>
const props = defineProps({
  comment: Object
})
</script>

<template>
  <div class="w-full p-3 flex justify-between bg-blue-100 text-black mb-2">
    <div class="content grid-col-1">
      <div class="name p-1 text-sm text-slate-700">{{ props.comment.name }}</div>
      <div class="email px-1 text-xs text-slate-500">{{ props.comment.email }}</div>
      <div class="body p-2 text-sm italic text-slate-600">&quot;{{ props.comment.body }}&quot;</div>
    </div>
  </div>
</template>
