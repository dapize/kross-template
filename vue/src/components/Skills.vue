<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-title">Skills</h2>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0" v-for="(skill, index) in skills" :key="index">
          <div class="card shadow text-center">
            <div class="position-relative rounded-top progress-wrapper" :style="{ backgroundColor: skill.color }">
              <div class="wave" :style="{ bottom: `${skill.percentage}%` }"></div>
            </div>
            <div class="card-footer bg-white">
              <h4 class="card-title">{{ skill.title }} ({{ skill.percentage }}%)</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        { title: 'Web Design', percentage: 90, color: '#fdb157' },
        { title: 'Logo Design', percentage: 60, color: '#9473e6' },
        { title: 'After Effects', percentage: 80, color: '#bdecf6' },
        { title: 'Web App', percentage: 70, color: '#ffbcaa' },
      ]
    }
  }
}
</script>
