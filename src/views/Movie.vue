<script setup>
import { onMounted, computed, ref, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const posterPath = computed(() => "https://image.tmdb.org/t/p/w500/" + movie.value.poster_path)
const castProfilePath = computed(() => path => {
  if (path) return "https://image.tmdb.org/t/p/w500/" + path
  else return 'https://via.placeholder.com/300x450'
})

const formatReleaseDate = computed(() => new Date(movie.value.release_date).toLocaleDateString('el-GR'))

const movieGenres = computed(() => movie.value.genres.map(genre => genre.name).join(', '))

const movieTrailerKey = computed(() => movie.value.videos.results.find(video => video.type == 'Trailer')?.key)

function fetchData() {
  fetch(`https://api.themoviedb.org/3/movie/${props.id}?append_to_response=credits,videos,images&api_key=${import.meta.env.VITE_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      movie.value = data;
      renderTemplate.value = true
      console.log(movie.value)
    });
}

onMounted(() => {
  fetchData()
})

watch(() => props.id, () => {
  fetchData()
})

const movie = ref({})
const renderTemplate = ref(false)
const showModal = ref(false)
</script>

<template>
  <div v-if="renderTemplate">
    <div class="movie-info border-b dark:border-gray-800 border-gray-400">
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div class="flex-none">
          <img :src="posterPath" :alt="`Poster of the ${movie.title} movie`" class="w-64 lg:w-96">
        </div>
        <div class="md:ml-24">
          <h2 class="text-4xl mt-4 md:mt-0 font-semibold dark:text-amber-300 text-red-500">{{ movie.title }}</h2>
          <div class="flex flex-wrap items-center dark:text-gray-400 text-gray-500 text-sm">
            <svg class="fill-current dark:text-amber-300 text-red-500 w-4" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star" />
              </g>
            </svg>
            <span class="ml-1">{{ movie.vote_average }}</span>
            <span class="mx-2">|</span>
            <span>{{ formatReleaseDate }}</span>
            <span class="mx-2">|</span>
            <span>{{ movieGenres }}</span>
          </div>
          <p class="dark:text-gray-300 text-gray-500 mt-8">
            {{ movie.overview }}
          </p>
          <div class="mt-12">
            <h4 class="dark:text-amber-300 text-red-500 font-semibold">Featured Crew</h4>
            <div class="flex mt-4">
              <div v-for="crew in movie.credits.crew.slice(0, 4)" :key="crew.id" class="mr-8">
                <div>{{ crew.name }}</div>
                <div class="text-sm text-gray-400">{{ crew.job }}</div>
              </div>
            </div>
          </div>
          <div v-if="movieTrailerKey" class="mt-12">
            <button @click="showModal = true" class="inline-flex items-center dark:bg-amber-300 bg-red-500 text-gray-900 rounded font-semibold px-5 py-4 
                dark:hover:bg-amber-500 hover:bg-red-700 transition ease-in-out duration-150">
              <svg class="w-6 dark:text-black text-white fill-current" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <span class="ml-2 dark:text-black text-white">Play Trailer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="movie-cast border-b dark:border-gray-800 border-gray-400">
      <div class="container mx-auto px-4 py-16">
        <h2 class="dark:text-amber-300 text-red-500 text-4xl font-semibold">Cast</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div v-for="cast in movie.credits.cast.slice(0, 10)" :key="cast.id" class="mt-8">
            <router-link :to="`/person/${cast.id}`">
              <img :src="castProfilePath(cast.profile_path)" :alt="`Picture of ${cast.name}`"
                class="hover:opacity-75 transition ease-in-out duration-150">
            </router-link>
            <div class="mt-2">
              <router-link :to="`/person/${cast.id}`" class="text-lg mt-2 hover:text-gray:300">{{ cast.name }}
              </router-link>
              <div class="text-sm text-gray-400">
                {{ cast.character }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="movie-images">
      <div class="container mx-auto px-4 py-16">
        <h2 class="dark:text-amber-300 text-red-500 text-4xl font-semibold">Images</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="image in movie.images.backdrops.slice(0, 9)" class="mt-8">
            <img :src="`https://image.tmdb.org/t/p/w500/${image.file_path}`" :alt="`Images of ${movie.title} movie`"
              class="hover:opacity-75 transition ease-in-out duration-150">
          </div>
        </div>
      </div>
    </div>

    <!-- TODO make modal component -->
    <div v-if="showModal" style="background-color: rgba(0, 0, 0, .5);"
      class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto">
      <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
        <div class="dark:bg-gray-900 bg-slate-200 rounded">
          <div class="flex justify-end pr-4 pt-2">
            <button @click="showModal = false" class="text-3xl leading-none dark:hover:text-gray-300 hover:text-gray-500">&times;
            </button>
          </div>
          <div class="modal-body px-8 pt-4 pb-8">
            <div class="responsive-container overflow-hidden relative" style="padding-top: 56.25%">
              <iframe class="responsive-iframe absolute top-0 left-0 w-full h-full"
                :src="`https://www.youtube.com/embed/${movieTrailerKey}`" style="border:0;"
                allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
</style>