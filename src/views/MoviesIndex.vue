<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue'
import Spinner from '../components/Spinner.vue'

onMounted(() => {
  Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`),
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`),
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`),
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`)
  ]).then(responses => Promise.all(responses.map(response => response.json()))
  ).then(data => {
    if (data[0].success !== false) {
      popularMovies.value = data[0].results.slice(0, 10)
      upcomingMovies.value = data[1].results.slice(0, 10)
      nowPlayingMovies.value = data[2].results.slice(0, 10)
      genres.value = data[3].genres
      renderTemplate.value = true
      console.log(data)
    }
  }).catch(error => console.log(error))
})

const popularMovies = ref([])
const genres = ref([])
const upcomingMovies = ref([])
const nowPlayingMovies = ref([])
const renderTemplate = ref(false)

</script>

<template>
  <div v-if="renderTemplate" class="container mx-auto px-4 pt-16">
    <div class="popular-movies pb-16">
      <h2 class="uppercase tracking-wider dark:text-amber-300 text-red-500 text-xl font-bold">Popular Movies</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="popularMovie in popularMovies" :key="popularMovie.id" class="mt-8">
          <MovieCard :movie="popularMovie" :genres="genres" />
        </div>
      </div>
    </div>

    <div class="upcoming-movies py-16">
      <h2 class="uppercase tracking-wider dark:text-amber-300 text-red-500 text-xl font-bold">Upcoming Movies</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="upcomingMovie in upcomingMovies" :key="upcomingMovie.id" class="mt-8">
          <MovieCard :movie="upcomingMovie" :genres="genres" />
        </div>
      </div>
    </div>

    <div class="now-playing-movies py-16">
      <h2 class="uppercase tracking-wider dark:text-amber-300 text-red-500 text-xl font-bold">Now Playing Movies</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="nowPlayingMovie in nowPlayingMovies" :key="nowPlayingMovie.id" class="mt-8">
          <MovieCard :movie="nowPlayingMovie" :genres="genres" />
        </div>
      </div>
    </div>
  </div>

  <div v-else class="h-screen flex justify-center items-center">
    <Spinner />
  </div>

</template>

<style scoped>
</style>
