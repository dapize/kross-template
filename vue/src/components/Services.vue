<script setup>
const services = [
  {
    title: 'UI Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    classIcon: 'ti-palette',
  },
  {
    title: 'UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    classIcon: 'ti-vector',
    active: true
  },
  {
    title: 'Interaction Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    classIcon: 'ti-panel'
  },
];
</script>
<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Services</h2>
        </div>
        <div class="col-md-4 mb-4 mb-md-0" v-for="(service, index) in services" :key="index">
          <div class="card hover-shadow shadow" :class="service.active && 'active-bg-primary'">
            <div class="card-body text-center px-4 py-5">
              <i class="icon mb-5 d-inline-block" :class="service.classIcon"></i>
              <h4 class="mb-4">{{ service.title }}</h4>
              <p>
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
