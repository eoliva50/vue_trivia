<!-- eslint-disable prettier/prettier -->
<script setup>
import useScore from '@/composables/useScore'
const { score } = useScore()
</script>

<template>
  <p class="score">Score: {{ score }}</p>
</template>

<style lang="postcss" scoped>
.score {
  @apply absolute  bottom-8 right-8 text-2xl font-bold text-white;
}
</style>
