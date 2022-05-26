<template>
  <section class="section bg-cover bg-image">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">My Team</h2>
        </div>
        <div class="col-md-4 col-sm-6 mb-4 mb-md-0" v-for="(member, index) in members" :keys="index">
          <div class="card text-center">
            <img :src="member.image" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">{{member.name}}</h4>
              <p class="text-light font-secondary">{{member.role}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Member1 from '../assets/images/team/member-1.png';
import Member2 from '../assets/images/team/member-2.png';
import Member3 from '../assets/images/team/member-3.png';

export default {
  setup() {
    return {
      members: [
        { name: 'Jack Schenziwe', role: 'Project Manager', image: Member1 },
        { name: 'Jack Schenziwe', role: 'Project Manager', image: Member2 },
        { name: 'Jack Schenziwe', role: 'Project Manager', image: Member3 }
      ]
    }
  }
}
</script>
<style scoped>
  .bg-image {
    background-image: url('../assets/images/backgrounds/team-bg.png');
  }
</style>
