<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'submit'
  }
});
</script>
<template>
  <button :type="type" class="btn btn-primary w-100" :disabled="loading">
    <template v-if="!loading">
      <slot></slot>
    </template>
    <template v-if="loading">
      <span class="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
    </template>
  </button>
</template>
