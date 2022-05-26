<template>
  <header class="navigation fixed-top" :class="navBg ? 'nav-bg' : ''" ref="main" id="main-header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link to="/" class="navbar-brand font-tertiary h3">
        <img src="../assets/images/logo.png" alt="Myself">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
        aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-center" id="navigation">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link :to="link.to" class="nav-link">{{link.name}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      navBg: false,
      links: [
        { to: '/', name: 'Home' },
        { to: '/about', name: 'About' },
        { to: '/blog', name: 'Blog' },
        { to: '/portfolio', name: 'Portfolio' },
        { to: '/contact', name: 'Contact' }
      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.fnScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.fnScroll)
  },
  methods: {
    fnScroll () {
      const el = this.$refs.main;
      if ( el ) {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        this.navBg = top > 100;
      }
    }
  }
}
</script>
