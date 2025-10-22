<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue'
onMounted(() => {
  let num = null
  console.log(num.length)
})
</script>

<template>
  <main>
    1111
    <TheWelcome />
  </main>
</template>
