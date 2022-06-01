<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


const section = ref(null);
const l2 = ref(null);
const l3 = ref(null);
const l4 = ref(null);
const l5 = ref(null);
const l6 = ref(null);
const l7 = ref(null);
const l8 = ref(null);
const l9 = ref(null);

const c2left = ref(null);
const c2top = ref(null);
const c3left = ref(null);
const c3top = ref(null);
const c4left = ref(null);
const c4top = ref(null);
const c5left = ref(null);
const c5top = ref(null);
const c6left = ref(null);
const c6top = ref(null);
const c7left = ref(null);
const c7top = ref(null);
const c8left = ref(null);
const c8top = ref(null);
const c9left = ref(null);
const c9top = ref(null);

const mouseParallax = (el, left, top, mouseX, mouseY, speed) => {
  const parentObj = el.parentNode;
  const containerWidth = parseInt(parentObj.offsetWidth);
  const containerHeight = parseInt(parentObj.offsetHeight);
  el.style.left = left - (((mouseX - (parseInt(el.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
  el.style.top = top - (((mouseY - (parseInt(el.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
};


const onMouseMove = (e) => {
  const event = e || window.event;
  const x = event.clientX - section.value.offsetLeft;
  const y = event.clientY - section.value.offsetTop;
  mouseParallax(l2.value, c2left.value, c2top.value, x, y, 25);
  mouseParallax(l3.value, c3left.value, c3top.value, x, y, 20);
  mouseParallax(l4.value, c4left.value, c4top.value, x, y, 35);
  mouseParallax(l5.value, c5left.value, c5top.value, x, y, 30);
  mouseParallax(l6.value, c6left.value, c6top.value, x, y, 45);
  mouseParallax(l7.value, c7left.value, c7top.value, x, y, 30);
  mouseParallax(l8.value, c8left.value, c8top.value, x, y, 25);
  mouseParallax(l9.value, c9left.value, c9top.value, x, y, 40);
};

onMounted(() => {
  if ( !window.matchMedia("(pointer: coarse)").matches ) {
    setTimeout(() => {
      c2left.value = l2.value.offsetLeft;
      c2top.value = l2.value.offsetTop;
      c3left.value = l3.value.offsetLeft;
      c3top.value = l3.value.offsetTop;
      c4left.value = l4.value.offsetLeft;
      c4top.value = l4.value.offsetTop;
      c5left.value = l5.value.offsetLeft;
      c5top.value = l5.value.offsetTop;
      c6left.value = l6.value.offsetLeft;
      c6top.value = l6.value.offsetTop;
      c7left.value = l7.value.offsetLeft;
      c7top.value = l7.value.offsetTop;
      c8left.value = l8.value.offsetLeft;
      c8top.value = l8.value.offsetTop;
      c9left.value = l9.value.offsetLeft;
      c9top.value = l9.value.offsetTop;

      if ( section.value ) {
        section.value.addEventListener('mousemove', onMouseMove);
      }
    }, 500)
  }
});

onUnmounted(() => {
  if ( section.value ) {
    section.value.removeEventListener('mousemove', onMouseMove);
  }
})

</script>

<template>
  <section class="hero-area bg-primary" id="parallax" ref="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-11 mx-auto">
          <h1 class="text-white font-tertiary">Hi! I’m <br> Christoher <br> UX designer</h1>
        </div>
      </div>
    </div>
    <div class="layer-bg w-100">
      <img src="../assets/images/illustrations/leaf-bg.png" class="img-fluid w-100" alt="bg-shape" />
    </div>
    <div class="layer" id="l2" ref="l2">
      <img src="../assets/images/illustrations/dots-cyan.png" alt="bg-shape" />
    </div>
    <div class="layer" id="l3" ref="l3">
      <img src="../assets/images/illustrations/leaf-orange.png" alt="bg-shape" />
    </div>
    <div class="layer" id="l4" ref="l4">
      <img src="../assets/images/illustrations/dots-orange.png" alt="bg-shape" />
    </div>
    <div class="layer" id="l5" ref="l5">
      <img src="../assets/images/illustrations/leaf-yellow.png" alt="bg-shape" />
    </div>
    <div class="layer" id="l6" ref="l6">
      <img src="../assets/images/illustrations/leaf-cyan.png" alt="bg-shape" />
    </div>
    <div class="layer" id="l7" ref="l7">
      <img src="../assets/images/illustrations/dots-group-orange.png" alt="bg-shape" />
    </div>
    <div class="layer" id="l8" ref="l8">
      <img src="../assets/images/illustrations/leaf-pink-round.png" alt="bg-shape" />
    </div>
    <div class="layer" id="l9" ref="l9">
      <img src="../assets/images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
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
<style scoped>
.hero-area {
  max-width: 100vw;
}
</style>
