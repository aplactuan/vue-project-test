<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
import { useFlash } from '@/composables/useFlash'

const message = ref("Hello World")

  setTimeout(() => {
    message.value = "Hello universe"
  }, 2000)

  const { flash } = useFlash()
</script>

<template>
  <main>
        <button @click="flash('Morbin time')">Lets Morb</button>
<!--    <TheWelcome />-->
<!--    {{ message }}-->
<!--    <input type="text" v-model="message">-->
  </main>
</template>
