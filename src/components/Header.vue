<script setup>
import { ref, onMounted } from 'vue'

const searchText = ref('')
const searchResults = ref([])
const target = ref(null)
const searchIsOpen = ref(false)
const debounce = ref(null)
const mobileMenuIsOpen = ref(false)

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (target.value && target.value.contains(e.target) === false) {
      searchIsOpen.value = false
    }
  })
})

function toggleMenu() {
  if (window.matchMedia("(max-width: 768px)").matches) mobileMenuIsOpen.value = !mobileMenuIsOpen.value
}

function debounceSearch() {
  clearTimeout(debounce.value)
  debounce.value = setTimeout(() => {
    searchResults.value = []
    if (searchText.value) {
      callApi()
    }
  }, 1000)
}

function callApi() {
  fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.value}&api_key=${import.meta.env.VITE_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      searchResults.value = data.results.slice(0, 5)
      console.log('searchResults', searchResults.value)
    });

}

</script>

<template>
  <nav class="border-b dark:border-gray-800 border-gray-400">
    <div class="container mx-auto py-3.5 px-5 md:flex">
      <router-link to="/">
        <div class="flex">
          <span class="dark:text-amber-300 text-red-500 text-3xl mr-5">
            MovieApp
          </span>
        </div>
      </router-link>

      <span @click="toggleMenu" class="absolute md:hidden right-6 top-4 cursor-pointer">
        <svg v-if="!mobileMenuIsOpen" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      <ul class="dark:bg-gray-900 bg-slate-200 text-xl md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute 
        md:w-auto w-full top-14 duration-300 ease-in" :class="[mobileMenuIsOpen ? 'left-0' : 'left-[-100%]']">
        <li class="md:mx-4 md:my-0 my-6">
          <router-link @click="toggleMenu" class="dark:hover:text-gray-300 hover:text-gray-500" to="/">Movies</router-link>
        </li>
        <li class="md:mx-4 md:my-0 my-6">
          <router-link @click="toggleMenu" class="dark:hover:text-gray-300 hover:text-gray-500" to="/tvShows">Tv Shows</router-link>
        </li>
        <li class="md:mx-4 md:my-0 my-6">
          <router-link @click="toggleMenu" class="dark:hover:text-gray-300 hover:text-gray-500" to="/people">People</router-link>
        </li>
      </ul>
      <div class="ml-auto md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute
        md:w-auto w-full top-56 duration-300 ease-in" :class="[mobileMenuIsOpen ? 'left-0' : 'left-[-100%]']">
        <div class="flex flex-col md:flex-row">
          <div class="relative mt-3 md:mt-0" ref="target">
            <input @focus="searchIsOpen = true" @keydown="searchIsOpen = true" v-model="searchText"
              @input="debounceSearch" type="text"
              class="dark:bg-gray-800 dark:border-0 border bg-slate-200 border-gray-400 text-sm rounded-full w-full md:w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline"
              placeholder="Search...">
            <div class="absolute top-0">
              <svg class="fill-current w-4 text-gray-500 mt-2 ml-2" viewBox="0 0 24 24">
                <path class="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
            </div>

            <!-- <div class="absolute spinner top-0 right-0 mr-4 mt-3"></div> -->

            <div v-show="searchText.length > 2 && searchIsOpen"
              class="z-50 absolute dark:bg-gray-800 dark:border-0 border border-gray-400 bg-slate-200 text-sm rounded w-full md:w-64 mt-5">
              <ul v-if="searchResults.length">
                <li v-for="searchResult in searchResults" :key="searchResult.id" class="border-b dark:border-gray-700 border-gray-400">
                  <router-link @click="searchIsOpen = false" :to="`/movie/${searchResult.id}`"
                    class="dark:hover:bg-gray-700 hover:bg-gray-500 hover:text-white px-3 py-3 flex items-center transition ease-in-out duration-150">
                    <img v-if="searchResult.poster_path"
                      :src="`https://image.tmdb.org/t/p/w92/${searchResult.poster_path}`" alt="poster" class="w-8">
                    <img v-else src="https://via.placeholder.com/50x75" alt="poster" class="w-8">
                    <span class="ml-4">{{ searchResult.title }}</span>
                  </router-link>
                </li>
              </ul>
              <div v-else class="px-3 py-3">No results for "{{ searchText }}"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
</style>