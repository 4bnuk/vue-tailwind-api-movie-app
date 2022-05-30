<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="bg-gray-900 text-white">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>
</style>
