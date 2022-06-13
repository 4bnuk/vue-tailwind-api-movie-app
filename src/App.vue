<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="dark:bg-gray-900 bg-slate-200 dark:text-white">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>
</style>
