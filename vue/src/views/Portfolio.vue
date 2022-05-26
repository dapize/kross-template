<template>
  <PageTitle align="center">Portfolio</PageTitle>
  <Portfolio :projects="projects" :title="false" filters></Portfolio>
  <Clients title></Clients>
</template>
<script>
import PageTitle from '@/components/PageTitle.vue';
import Portfolio from '@/components/Portfolio.vue';
import Clients from '@/components/Clients.vue';

import project1 from '@/assets/images/portfolio/item-1.png';
import project2 from '@/assets/images/portfolio/item-2.png';
import project3 from '@/assets/images/portfolio/item-3.png';
import project5 from '@/assets/images/portfolio/item-5.png';
import project6 from '@/assets/images/portfolio/item-6.png';
import project7 from '@/assets/images/portfolio/item-7.png';
import project8 from '@/assets/images/portfolio/item-8.png';

export default {
  components: {
    PageTitle,
    Portfolio,
    Clients
  },
  data() {
    return {
      projects: [
        { image: project1, groups: ['design', 'illustration'] },
        { image: project2, groups: ['branding'] },
        { image: project3, groups: ['illustration'] },
        { image: project6, groups: ['design', 'branding'] },
        { image: project8, groups: ['illustration'] },
        { image: project5, groups: ['design'] },
        { image: project1, groups: ['branding'] },
        { image: project3, groups: ['design', 'illustration', 'branding'] },
        { image: project7, groups: ['illustration'] }
      ]
    }
  }
}
</script>
