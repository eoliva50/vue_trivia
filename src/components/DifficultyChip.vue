<!-- eslint-disable prettier/prettier -->
<script setup>
const props = defineProps({
  difficulty: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p
    class="difficulty"
    :class="
      props.difficulty === 'easy' ? 'bg-green-600' : props.difficulty === 'medium' ? 'bg-yellow-600' : 'bg-red-600'
    "
  >
    {{ props.difficulty }}
  </p>
</template>

<style lang="postcss" scoped>
.difficulty {
  @apply absolute bottom-5 left-8 rounded-full  border px-4 py-2 text-2xl font-bold uppercase text-white;
}
</style>
