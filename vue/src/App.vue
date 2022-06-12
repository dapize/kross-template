<script setup>
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header></Header>
  <router-view/>
  <Contact></Contact>
  <Footer></Footer>
</template>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import './assets/css/styles.css';
@import './assets/themify-icons/themify-icons.css';
</style>
