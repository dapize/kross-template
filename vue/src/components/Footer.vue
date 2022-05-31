<script setup>
const currentYear = new Date().getFullYear();
const data = [
  { title: 'Email', content: 'steve.fruits@email.com'},
  { title: 'Phone', content: '+880 2544 658 256'},
  { title: 'Address', content: '125/A, CA Commercial Area, California, USA'},
]
</script>
<template>
  <footer class="bg-dark footer-section">
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="(item, index) in data" :key="index">
            <h5 class="text-light">{{ item.title }}</h5>
            <p class="text-white paragraph-lg font-secondary">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="border-top text-center border-dark py-5">
      <p class="mb-0 text-light">Copyright &copy;{{ currentYear }} Designed &amp; Developed by <a class="text-white-50" href="Themefisher">Themefisher</a></p>
    </div>
  </footer>
</template>
