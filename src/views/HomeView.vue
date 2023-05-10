<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
import { useFlash } from '@/composables/useFlash'
import { useStorage } from '@/composables/useStorage'

    const { flash } = useFlash()

    const food = useStorage('food')
</script>

<template>
  <main>
        <button @click="flash('Morbin time')">Lets Morb</button>

        <p>
            What is your favorite food?
        </p>
      <input type="text" v-model="food">
  </main>
</template>
