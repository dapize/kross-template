<template>
  <Header></Header>
  <router-view/>
  <Contact></Contact>
  <Footer></Footer>
</template>

<script>
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Footer,
    Contact,
    Header
  }
}
</script>

<style>
@import './assets/css/vendors/bootstrap.min.css';
@import './assets/css/styles.css';
@import './assets/themify-icons/themify-icons.css';
</style>
