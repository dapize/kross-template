<script setup>
import Hero from "@/components/Hero.vue";
import PreAbout from "@/components/PreAbout.vue";
import Skills from "@/components/Skills.vue";
import Experience from "@/components/Experience.vue"
import Education from "@/components/Education.vue";
import Services from "@/components/Services.vue";
import Portfolio from "@/components/Portfolio.vue";
import Testimonials from "@/components/Testimonials.vue";
import Clients from "@/components/Clients.vue";

import project1 from '@/assets/images/portfolio/item-1.png';
import project2 from '@/assets/images/portfolio/item-2.png';
import project3 from '@/assets/images/portfolio/item-3.png';
import project4 from '@/assets/images/portfolio/item-4.png';
import project5 from '@/assets/images/portfolio/item-5.png';

const projects = [
  { image: project1 }, { image: project2 }, { image: project3 }, { image: project4 }, { image: project5 }
]
</script>
<template>
  <Hero></Hero>
  <PreAbout></PreAbout>
  <Skills></Skills>
  <Experience></Experience>
  <Education></Education>
  <Services></Services>
  <Portfolio :projects="projects"></Portfolio>
  <Testimonials></Testimonials>
  <Clients></Clients>
</template>

