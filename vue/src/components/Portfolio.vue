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
<script>

import Shuffle from 'shufflejs';

export default {
  data() {
    return {
      shuffleWrapper: null,
      filtersItem: [
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
      ],
      shuffleInstance: null
    }
  },
  mounted() {
    this.shuffleInstance = new Shuffle(this.$refs.shuffleWrapper, {
      itemSelector: '.shuffle-item',
      buffer: 1
    });
  },
  props: {
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
  },
  methods: {
    filterTo(event) {
      const inputValue = event.currentTarget.value;
      this.filtersItem = this.filtersItem.map( filter => ({
        ...filter,
        active: filter.value === inputValue
      }))
      this.shuffleInstance.filter(inputValue);
    }
  },
  computed: {
    items() {
      return this.projects.map( item => {
        const groups = item.groups ? `["${item.groups.join('","')}"]` : []
        return {
          ...item,
          groups
        }
      })
    }
  }
}
</script>
