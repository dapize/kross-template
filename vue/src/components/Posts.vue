<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-4" v-for="(post, index) in posts" :keys="index">
          <article class="card shadow">
            <img class="rounded card-img-top" :src="post.image" alt="post-thumb">
            <div class="card-body">
              <h4 class="card-title">
                <a class="text-dark" href="blog-single.html">
                  {{ post.title }}
                </a>
              </h4>
              <p class="cars-text">{{ post.description }}</p>
              <router-link :to="{ path: `/blog/${post.url}`, hash: '#title'}" class="btn btn-xs btn-primary">Read More</router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Post5 from '../assets/images/blog/post-5.jpg';
import Post2 from '../assets/images/blog/post-2.jpg';
import Post3 from '../assets/images/blog/post-3.jpg';
import Post4 from '../assets/images/blog/post-4.jpg';

export default {
  setup() {
    return {
      posts: [
        {
          image: Post5,
          title: 'Amazon increase income 1.5 Million',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          url: 'single'
        },
        {
          image: Post2,
          title: 'Amazon increase income 1.5 Million',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          url: 'single'
        },
        {
          image: Post3,
          title: 'Amazon increase income 1.5 Million',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          url: 'single'
        },
        {
          image: Post4,
          title: 'Amazon increase income 1.5 Million',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          url: 'single'
        },
        {
          image: Post5,
          title: 'Amazon increase income 1.5 Million',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          url: 'single'
        },
        {
          image: Post2,
          title: 'Amazon increase income 1.5 Million',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          url: 'single'
        }
      ]
    }
  }
}
</script>
