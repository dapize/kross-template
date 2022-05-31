<script setup>
defineProps({
  avatar: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  last: {
    type: Boolean,
    required: true
  }
})
</script>
<template>
  <div class="media py-4" :class="last && 'border-bottom'">
    <img :src="avatar" class="img-fluid align-self-start rounded-circle mr-3" alt="">
    <div class="media-body">
      <h5 class="mt-0">{{author}}</h5>
      <p>{{date}}</p>
      <p><slot></slot></p>
      <a href="#!" class="btn btn-transparent btn-sm pl-0">Reply</a>
    </div>
  </div>
</template>

