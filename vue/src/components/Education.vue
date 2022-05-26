<template lang="">
  <section class="section position-relative">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-title">Education</h2>
        </div>
        <div class="col-lg-6 col-md-6 mb-80" v-for="(learning, index) in learnings" :key="index">
          <div class="d-flex">
            <div class="mr-lg-5 mr-3">
              <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
            </div>
            <div>
              <p class="text-dark mb-1">{{ learning.year }}</p>
              <h4>{{ learning.title }}</h4>
              <p class="mb-0 text-light">{{ learning.institution }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- bg image -->
    <img class="img-fluid edu-bg-image w-100" src="../assets/images/backgrounds/education-bg.png" alt="bg-image">
  </section>
</template>
<script>
export default {
  data() {
    return {
      learnings: [
        {
          title: 'Marters in UX Design',
          year: 2006,
          institution: 'Masassusets Institute of Technology'
        },
        {
          title: 'Honours in Fine Arts',
          year: 2004,
          institution: 'Harvard University'
        },
        {
          title: 'Higher Secondary Certificat',
          year: 2000,
          institution: 'Cardiff School'
        },
        {
          title: 'Secondary School Certificate',
          year: 1998,
          institution: 'Cardiff School'
        }
      ]
    }
  }
}
</script>
