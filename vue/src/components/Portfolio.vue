<script setup>
import Shuffle from 'shufflejs';
import { onMounted, ref, computed } from 'vue';

const props = defineProps({
  title: {
    type: Boolean,
    default: true
  },
  filters: {
    type: Boolean,
    default: false
  },
  projects: {
    type: Array,
    required: true
  }
});
const shuffleWrapper = ref(null);
const filtersItem = ref([
  {
    title:'All',
    value: 'all',
    active: true
  },
  {
    title: 'UI/UX Design',
    value: 'design'
  },
  {
    title: 'BRANDING',
    value: 'branding'
  },
  {
    title: 'ILLUSTRATION',
    value: 'illustration'
  },
]);

let shuffleInstance;

const filterTo = (event) => {
  const inputValue = event.currentTarget.value;
  filtersItem.value = filtersItem.value.map( filter => ({
    ...filter,
    active: filter.value === inputValue
  }))
  shuffleInstance.filter(inputValue);
}

const items = computed( () => {
  return props.projects.map( item => {
    const groups = item.groups ? `["${item.groups.join('","')}"]` : []
    return {
      ...item,
      groups
    }
  })
})

onMounted(() => {
  setTimeout(() => {
    if ( shuffleWrapper.value ) {
      shuffleInstance = new Shuffle(shuffleWrapper.value, {
        itemSelector: '.shuffle-item',
        buffer: 1
      });
    }
  }, 500);
})

</script>

<template>
  <section class="section">
    <div class="container">
      <div class="row" v-if="title">
        <div class="col-12 text-center">
          <h2 class="section-title">Portfolio</h2>
        </div>
      </div>
      <div class="row mb-5" v-if="filters">
        <div class="col-12">
          <div class="btn-group btn-group-toggle justify-content-center d-flex" data-toggle="buttons">
            <label class="btn btn-sm btn-primary" :class="filter.active && 'active'" v-for="(filter, index) in filtersItem" :key="index">
              <input type="radio" name="shuffle-filter" :value="filter.value" :checked="filter.active" @change="filterTo" />{{filter.title}}
            </label>
          </div>
        </div>
      </div>
      <div class="row shuffle-wrapper" ref="shuffleWrapper">
        <div
          class="col-lg-4 col-6 mb-4 shuffle-item"
          v-for="(project, index) in items"
          :key="index"
          :data-groups="project.groups"
        >
          <div class="position-relative rounded hover-wrapper">
            <img :src="project.image" alt="portfolio-image" class="img-fluid rounded w-100">
            <div class="hover-overlay">
              <div class="hover-content">
                <a class="btn btn-light btn-sm" href="#!">view project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
@media screen and (max-width: 479px) {
  .btn-primary {
    font-size:  13px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
