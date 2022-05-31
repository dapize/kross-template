<script setup>
import { computed } from 'vue';
const props = defineProps({
  align: {
    type: String,
    default: 'left'
  }
})

const themeClass = computed(() => {
  return props.align === 'left' ? 'page-title-alt' : 'page-title';
});

const alignTitle = computed(() => {
  switch(props.align) {
    case 'left':
      return '';
    case 'center':
      return 'text-center'
  }
})
</script>
<template>
  <section class="bg-primary position-relative" :class="themeClass">
    <div class="container">
      <div class="row">
        <div class="col-12" :class="alignTitle">
          <h1 class="text-white font-tertiary"><slot></slot></h1>
        </div>
      </div>
    </div>
    <template v-if="align === 'left'">
      <img src="../assets/images/illustrations/leaf-bg-top.png" alt="illustrations" class="bg-shape-1 w-100">
      <img src="../assets/images/illustrations/dots-group-sm.png" alt="illustrations" class="bg-shape-2">
      <img src="../assets/images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-3">
      <img src="../assets/images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4">
      <img src="../assets/images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-5">
      <img src="../assets/images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-6">
    </template>
    <template v-if="align === 'center'">
      <img src="../assets/images/illustrations/page-title.png" alt="illustrations" class="bg-shape-1 w-100">
      <img src="../assets/images/illustrations/leaf-pink-round.png" alt="illustrations" class="bg-shape-2">
      <img src="../assets/images/illustrations/dots-cyan.png" alt="illustrations" class="bg-shape-3">
      <img src="../assets/images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4">
      <img src="../assets/images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-5">
      <img src="../assets/images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-6">
      <img src="../assets/images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-7">
    </template>
  </section>
</template>

