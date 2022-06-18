<script setup>
import { ref, onMounted } from 'vue'
import TvShowCard from '../components/TvShowCard.vue'
import Spinner from '../components/Spinner.vue'

onMounted(() => {
  Promise.all([
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}`),
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${import.meta.env.VITE_API_KEY}`),
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_API_KEY}`),
    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${import.meta.env.VITE_API_KEY}`)
  ]).then(responses => Promise.all(responses.map(response => response.json()))
  ).then(data => {
    if (data[0].success !== false) {
      popularTvshows.value = data[0].results.slice(0, 10)
      onTheAirTvshows.value = data[1].results.slice(0, 10)
      topRatedTvShows.value = data[2].results.slice(0, 10)
      genres.value = data[3].genres
      renderTemplate.value = true
      console.log(data)
    }
  }).catch(error => console.log(error))
})

const popularTvshows = ref([])
const genres = ref([])
const onTheAirTvshows = ref([])
const topRatedTvShows = ref([])
const renderTemplate = ref(false)

</script>

<template>
  <div v-if="renderTemplate" class="container mx-auto px-4 pt-16">
    <div class="popular-tv-shows pb-16">
      <h2 class="uppercase tracking-wider dark:text-amber-300 text-red-500 text-xl font-bold">Popular Tv Shows</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="popularTvshow in popularTvshows" :key="popularTvshow.id" class="mt-8">
          <TvShowCard :tvShow="popularTvshow" :genres="genres" />
        </div>
      </div>
    </div>

    <div class="on-the-air-tv-shows py-16">
      <h2 class="uppercase tracking-wider dark:text-amber-300 text-red-500 text-xl font-bold">On The Air Tv Shows</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="onTheAirTvshow in onTheAirTvshows" :key="onTheAirTvshow.id" class="mt-8">
          <TvShowCard :tvShow="onTheAirTvshow" :genres="genres" />
        </div>
      </div>
    </div>

    <div class="top-rated-tv-shows py-16">
      <h2 class="uppercase tracking-wider dark:text-amber-300 text-red-500 text-xl font-bold">Top Rated Tv Shows</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="topRatedTvShow in topRatedTvShows" :key="topRatedTvShow.id" class="mt-8">
          <TvShowCard :tvShow="topRatedTvShow" :genres="genres" />
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
