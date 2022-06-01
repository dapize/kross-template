<script setup>
import Plan from '../assets/images/icons/plan.png';
import Design from '../assets/images/icons/design.png';
import Print from '../assets/images/icons/print.png';


const processes = [
  {
    title: 'Research and Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: Plan
  },
  {
    title: 'Design and Develop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: Design
  },
  {
    title: 'Deliver',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: Print
  }
];
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-lg-12 text-center">
          <h2 class="section-title">Work Process</h2>
        </div>
        <div class="col-lg-3 col-md-4 text-center hover-shadow pt-3" v-for="(process, index) in processes" :key="index">
          <img :src="process.img" class="mb-4" alt="icon" />
          <h4 class="mb-4">{{process.title}}</h4>
          <p>{{process.description}}</p>
        </div>
      </div>
    </div>
  </section>
</template>
