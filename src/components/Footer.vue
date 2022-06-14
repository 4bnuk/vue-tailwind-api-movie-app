<script setup>
import { ref } from 'vue'

const darkMode = ref(true)

function toggleMode() {
  darkMode.value = !darkMode.value
  document.getElementsByTagName('body')[0].classList.toggle('dark')
}

</script>

<template>
  <footer class="border-t dark:border-gray-800 border-gray-400 py-3">
    <div class="flex flex-col-reverse md:flex-row justify-between container place-items-center mx-auto p-4">
      <div>
        <p>Created by Me</p>
        <p>This product uses the<a href="https://www.themoviedb.org/documentation/api"> TMDB API</a> but is not endorsed
          or
          certified by TMDB</p>
      </div>
      <div class="flex space-x-4 justify-center mb-10 md:mb-0">
        <span v-if="darkMode">Light Mode:</span>
        <span v-else>Dark Mode:</span>
        <svg v-if="darkMode" @click="toggleMode" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else @click="toggleMode" class="h-6 w-6 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </div>
  </footer>
</template>

<style>
</style>