<!-- eslint-disable prettier/prettier -->
<script setup>
import MainScore from '@/components/MainScore.vue'
</script>

<template>
  <main>
    <div class="card">
      <RouterView />
    </div>
  </main>
  <MainScore />
</template>

<style lang="postcss" scoped>
main {
  @apply flex h-screen items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black;
  & .card {
    @apply flex h-5/6 min-h-fit w-11/12 flex-col items-center gap-16 overflow-auto rounded-lg bg-white shadow-lg;
  }
}
</style>
