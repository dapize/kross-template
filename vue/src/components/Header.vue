<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


const links = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' },
  { to: '/blog', name: 'Blog' },
  { to: '/portfolio', name: 'Portfolio' },
  { to: '/contact', name: 'Contact' }
];

const navBg = ref(false);
const menuOpened = ref(false);
const main = ref(null);

const fnScroll = () => {
  if ( main ) {
    const rect = main.value.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    navBg.value = top > 100;
  }
};

const openMenu = () => {
  if (window.matchMedia("(max-width: 991px)").matches) {
    menuOpened.value = !menuOpened.value
  }
}

onMounted(() => {
  window.addEventListener('scroll', fnScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', fnScroll)
})
</script>
<template>
  <header class="navigation fixed-top" :class="navBg ? 'nav-bg' : ''" ref="main" id="main-header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link to="/" class="navbar-brand font-tertiary h3">
        <img src="../assets/images/logo.png" alt="Myself" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        :aria-expanded="menuOpened"
        aria-label="Toggle navigation"
        @click="openMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navigation" :class="menuOpened && 'show'">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link :to="link.to" class="nav-link" @click="openMenu">
              {{link.name}}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
