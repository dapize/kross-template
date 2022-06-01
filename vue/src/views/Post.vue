<script setup>
import { format } from 'date-fns'
import { ref } from 'vue';

import PageTitle from '@/components/PageTitle.vue';
import Comments from '@/components/Comments.vue';

import ImagePost from '@/assets/images/blog/post-1.jpg';
import Avatar1 from '@/assets/images/user-1.jpg';
import Avatar2 from '@/assets/images/user-2.jpg';
import Avatar3 from '@/assets/images/user-3.jpg';


const title = 'What should be the proper purpose of UI and UX design?',
      image = ImagePost,
      date = 'May 26, 2017',
      author = 'uixgeek',
      category = 'UX design',
      content = `<strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem.</p>
            <blockquote>Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem.</p>`;
const comments = ref([
  {
    avatar: Avatar1,
    author: 'Carole Marvin.',
    date: '15 january 2015 At 10:30 pm',
    content: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem.',
  },
  {
    avatar: Avatar2,
    author: 'Jaquan Rolfson.',
    date: '15 january 2015 At 10:30 pm',
    content: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem',
  },
  {
    avatar: Avatar3,
    author: 'Bruce Bernier.',
    date: '15 january 2015 At 10:30 pm',
    content: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem',
  },
])

const sendComment = ( data ) => {
  const { firstName, lastName, message } = data;
  const newComment = {
    author: firstName + ' ' + lastName,
    content: message,
    date: format(new Date(), "i MMM y 'At' h:m aaa"),
    avatar: Avatar1
  };
  comments.value = [ ...comments.value, newComment]
}
</script>
<template>
  <PageTitle align="center">Blogs</PageTitle>
  <a id="post"></a>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="font-tertiary mb-3">{{title}}</h3>
          <p class="font-secondary mb-5">
            Published on {{date}} by <span class="text-primary">{{author}}</span> on <span>{{category}}</span>
          </p>
          <div class="content">
            <img :src="image" alt="post-thumb" class="img-fluid rounded float-left mr-5 mb-4" />
            <div v-html="content"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Comments :list="comments" @addComment="sendComment"></Comments>
</template>

