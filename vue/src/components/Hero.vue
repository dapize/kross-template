<template>
  <section class="hero-area bg-primary" id="parallax" ref="section" @mousemove="onMouseMove">
    <div class="container">
      <div class="row">
        <div class="col-lg-11 mx-auto">
          <h1 class="text-white font-tertiary">Hi! I’m <br> Christoher <br> UX designer</h1>
        </div>
      </div>
    </div>
    <div class="layer-bg w-100">
      <img class="img-fluid w-100" src="../assets/images/illustrations/leaf-bg.png" alt="bg-shape">
    </div>
    <div class="layer" id="l2" ref="l2">
      <img src="../assets/images/illustrations/dots-cyan.png" alt="bg-shape">
    </div>
    <div class="layer" id="l3" ref="l3">
      <img src="../assets/images/illustrations/leaf-orange.png" alt="bg-shape">
    </div>
    <div class="layer" id="l4" ref="l4">
      <img src="../assets/images/illustrations/dots-orange.png" alt="bg-shape">
    </div>
    <div class="layer" id="l5" ref="l5">
      <img src="../assets/images/illustrations/leaf-yellow.png" alt="bg-shape">
    </div>
    <div class="layer" id="l6" ref="l6">
      <img src="../assets/images/illustrations/leaf-cyan.png" alt="bg-shape">
    </div>
    <div class="layer" id="l7" ref="l7">
      <img src="../assets/images/illustrations/dots-group-orange.png" alt="bg-shape">
    </div>
    <div class="layer" id="l8" ref="l8">
      <img src="../assets/images/illustrations/leaf-pink-round.png" alt="bg-shape">
    </div>
    <div class="layer" id="l9" ref="l9">
      <img src="../assets/images/illustrations/leaf-cyan-2.png" alt="bg-shape">
    </div>
    <!-- social icon -->
    <ul class="list-unstyled ml-5 mt-3 position-relative zindex-1">
      <li class="mb-3">
        <a class="text-white" href="https://themefisher.com/"><i class="ti-facebook"></i></a>
      </li>
      <li class="mb-3">
        <a class="text-white" href="https://themefisher.com/"><i class="ti-instagram"></i></a>
      </li>
      <li class="mb-3">
        <a class="text-white" href="https://themefisher.com/"><i class="ti-dribbble"></i></a>
      </li>
      <li class="mb-3">
        <a class="text-white" href="https://themefisher.com/"><i class="ti-twitter"></i></a>
      </li>
    </ul>
    <!-- /social icon -->
  </section>
</template>
<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      section: null,
      c2left: null,
      c2top: null,
      c3left: null,
      c3top: null,
      c4left: null,
      c4top: null,
      c5left: null,
      c5top: null,
      c6left: null,
      c6top: null,
      c7left: null,
      c7top: null,
      c8left: null,
      c8top: null,
      c9left: null,
      c9top: null,
    }
  },
  mounted() {
    this.c2left = this.$refs.l2.offsetLeft;
    this.c2top = this.$refs.l2.offsetTop;
    this.c3left = this.$refs.l3.offsetLeft;
    this.c3top = this.$refs.l3.offsetTop;
    this.c4left = this.$refs.l4.offsetLeft;
    this.c4top = this.$refs.l4.offsetTop;
    this.c5left = this.$refs.l5.offsetLeft;
    this.c5top = this.$refs.l5.offsetTop;
    this.c6left = this.$refs.l6.offsetLeft;
    this.c6top = this.$refs.l6.offsetTop;
    this.c7left = this.$refs.l7.offsetLeft;
    this.c7top = this.$refs.l7.offsetTop;
    this.c8left = this.$refs.l8.offsetLeft;
    this.c8top = this.$refs.l8.offsetTop;
    this.c9left = this.$refs.l9.offsetLeft;
    this.c9top = this.$refs.l9.offsetTop;
  },
  methods: {
    onMouseMove(e) {
      const event = e || window.event;
      const x = event.clientX - this.$refs.section.offsetLeft;
      const y = event.clientY - this.$refs.section.offsetTop;
      this.mouseParallax(this.$refs.l2, this.c2left, this.c2top, x, y, 25);
      this.mouseParallax(this.$refs.l3, this.c3left, this.c3top, x, y, 20);
      this.mouseParallax(this.$refs.l4, this.c4left, this.c4top, x, y, 35);
      this.mouseParallax(this.$refs.l5, this.c5left, this.c5top, x, y, 30);
      this.mouseParallax(this.$refs.l6, this.c6left, this.c6top, x, y, 45);
      this.mouseParallax(this.$refs.l7, this.c7left, this.c7top, x, y, 30);
      this.mouseParallax(this.$refs.l8, this.c8left, this.c8top, x, y, 25);
      this.mouseParallax(this.$refs.l9, this.c9left, this.c9top, x, y, 40);
    },
    mouseParallax(el, left, top, mouseX, mouseY, speed) {
      const parentObj = el.parentNode;
      const containerWidth = parseInt(parentObj.offsetWidth);
      const containerHeight = parseInt(parentObj.offsetHeight);
      el.style.left = left - (((mouseX - (parseInt(el.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
      el.style.top = top - (((mouseY - (parseInt(el.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    },
  }
}
</script>
