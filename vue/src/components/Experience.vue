<script setup>
import experience1 from '../assets/images/experience/icon-1.png';
import experience2 from '../assets/images/experience/icon-2.png';
import experience3 from '../assets/images/experience/icon-3.png';


const experiences = [
  {
    period: 'Jan 2007 - Feb 2009',
    title: 'Junior UX Designer',
    company: 'WEBEX',
    icon: experience1
  },
  {
    period: 'Mar 2009 - Aug 2014',
    title: 'UX & UI Designer',
    company: 'AUGMEDIX',
    icon: experience2
  },
  {
    period: 'Sep 2014 - Present',
    title: 'Senior UI Designer',
    company: 'THEMEFISHER',
    icon: experience3
  }
]
</script>
<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-lg-12 text-center">
          <h2 class="section-title">Experience</h2>
        </div>
        <div class="col-lg-3 col-md-4 text-center" v-for="(experience, index) in experiences" :key="index">
          <img :src="experience.icon" :alt="experience.title" />
          <p class="mb-0">{{ experience.period }}</p>
          <h4>{{ experience.title }}</h4>
          <h6 class="text-light">{{ experience.company }}</h6>
        </div>
      </div>
    </div>
  </section>
</template>

