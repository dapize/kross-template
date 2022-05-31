<script setup>
import PostForm from './PostForm.vue'
import Comment from './Comment.vue';
import { computed } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    required: true
  }
});

const nList = computed(() => {
  return props.list.length
});

const emit = defineEmits(['addComment']);

const sendComment = ( data ) => {
  emit('addComment', data);
}
</script>
<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4 class="font-weight-bold mb-3">Comments {{list.length}}</h4>
          <div class="bg-gray p-5 mb-4">
            <Comment
              v-for="(item, index) in list"
              :keys="index"
              :avatar="item.avatar"
              :author="item.author"
              :date="item.date"
              :last="nList !== (index + 1)"
            >
              {{item.content}}
            </Comment>
          </div>
          <PostForm @onSubmit="sendComment"></PostForm>
        </div>
      </div>
    </div>
  </section>
</template>

