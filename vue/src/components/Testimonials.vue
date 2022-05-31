<script setup>
import avatar from '../assets/images/testimonial/client-1.png';

import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

const testimonials = [
  {
    author: 'Jesica Gomez',
    role: 'CEO, Funder',
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    avatar
  },
  {
    author: 'Jesica Gomez',
    role: 'CEO, Funder',
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    avatar
  },
  {
    author: 'Jesica Gomez',
    role: 'CEO, Funder',
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    avatar
  }
]
const modules = [Pagination, A11y];
</script>
<template>
  <section class="section bg-primary position-relative testimonial-bg-shapes">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title text-white mb-5">Testimonials</h2>
        </div>
        <div class="col-lg-10 mx-auto">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :pagination="{ clickable: true }"
            :loop="true"
          >
            <SwiperSlide class="text-center testimonial-content" v-for="(item, index) in testimonials" :key="index">
              <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
              <p class="text-white mb-4" v-html="item.testimony"></p>
              <img class="img-fluid rounded-circle mb-4 d-inline-block" :src="item.avatar" alt="client-image">
              <h4 class="text-white">{{item.author}}</h4>
              <h6 class="text-light mb-4">{{item.role}}</h6>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    <!-- bg shapes -->
    <img src="../assets/images/backgrounds/map.png" alt="map" class="img-fluid bg-map">
    <img src="../assets/images/illustrations/dots-group-v.png" alt="bg-shape" class="img-fluid bg-shape-1">
    <img src="../assets/images/illustrations/leaf-orange.png" alt="bg-shape" class="img-fluid bg-shape-2">
    <img src="../assets/images/illustrations/dots-group-sm.png" alt="bg-shape" class="img-fluid bg-shape-3">
    <img src="../assets/images/illustrations/leaf-pink-round.png" alt="bg-shape" class="img-fluid bg-shape-4">
    <img src="../assets/images/illustrations/leaf-cyan.png" alt="bg-shape" class="img-fluid bg-shape-5">
  </section>
</template>
<style>
.swiper-pagination {
  text-align: center;
  padding-left: 0;
}
.swiper-pagination-bullet {
  display: inline-block;
  margin: 2px;
  height: 6px;
  width: 12px;
  background: rgba(255, 255, 255, 0.5);
  color: transparent;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s ease;
  border: 0;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fff;
  width: 25px;
}
</style>
