<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

  const message = ref("Hello World")

  setTimeout(() => {
    message.value = "Hello universe"
  }, 2000)
</script>

<template>
  <main>
    <TheWelcome />
    {{ message }}
    <input type="text" v-model="message">
  </main>
</template>
