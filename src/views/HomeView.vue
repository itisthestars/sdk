<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref ,onMounted} from 'vue'
onMounted(()=>{
  console.log(a,b)
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
