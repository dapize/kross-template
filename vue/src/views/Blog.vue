<template>
  <PageTitle align="center">Blogs</PageTitle>
  <Posts></Posts>
  <Clients title></Clients>
</template>
<script>
import Clients from '@/components/Clients.vue';
import PageTitle from '@/components/PageTitle.vue';
import Posts from '@/components/Posts.vue';

export default {
  components: {
    Clients,
    PageTitle,
    Posts
  }
}
</script>

