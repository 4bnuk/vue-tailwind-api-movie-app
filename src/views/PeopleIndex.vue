<script setup>
import { ref, computed, onMounted } from 'vue'

const profilePath = computed(() => profile_path => {
  if (profile_path) return "https://image.tmdb.org/t/p/w500/" + profile_path
  else return 'https://via.placeholder.com/300x450'
})

onMounted(() => {
  fetch(`https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      people.value = data.results;
      console.log(people.value)
    });
})

const people = ref([])

</script>

<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-movies pb-16">
      <h2 class="uppercase tracking-wider dark:text-amber-300 text-red-500 text-xl font-bold">Popular People</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="person in people" :key="person.id" class="mt-8">
          <router-link :to="`/person/${person.id}`">
            <img :src="profilePath(person.profile_path)" :alt="`Picture of ${person.name}`"
              class="hover:opacity-75 transition ease-in-out duration-150">
          </router-link>
          <div class="mt-2">
            <router-link :to="`/person/${person.id}`" class="text-lg mt-2 hover:text-gray-300">
              {{ person.name }}
            </router-link>
            <div class="flex items-center text-gray-400 text-sm mt-1">
              <div class="text-gray-400 text-sm">{{ person.known_for_department }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>