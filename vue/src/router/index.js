import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import Post from '../views/Post.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:path',
    name: 'Post',
    component: Post
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    const objToReturn = {
      top: 0,
      behavior: 'smooth'
    };
    if ( to.hash === '#post') {
      objToReturn.el = to.hash,
      objToReturn.top = 35;
    }
    return objToReturn
  },
});

router.afterEach((to) => {
  document.title = to.name + ' | Kross Creative';
})

export default router
