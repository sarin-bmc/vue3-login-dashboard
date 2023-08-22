<script setup>
const props = defineProps({
  title: String,
  type: String,
  required: String,
  modelValue: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="input-wrapper m-3">
    <p class="text-lg">{{ props.title }}</p>
    <input
      :name="title"
      :type="type"
      class="text-black px-3 py-2 border-2 border-black rounded-md"
      :placeholder="title"
      :required="required"
      :value="modelValue"
      @input="($event) => $emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
