<template>
  <section class="section" :class="title ? 'bg-light' : 'pb-0'">
    <div class="container">
      <div class="row" v-if="title">
        <div class="col-12 text-center">
          <h2 class="section-title">My Clients</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="client-logo-slider d-flex align-items-center">
            <Swiper v-bind="settings">
              <SwiperSlide
                tag="a"
                href="contact.html"
                class="text-center d-block outline-0 p-4"
                v-for="(item, index) in logos" :key="index"
              >
                <img class="d-unset img-fluid" :src="item" alt="client-logo">
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import logo1 from '../assets/images/clients-logo/client-logo-1.png';
import logo2 from '../assets/images/clients-logo/client-logo-2.png';
import logo3 from '../assets/images/clients-logo/client-logo-3.png';
import logo4 from '../assets/images/clients-logo/client-logo-4.png';
import logo5 from '../assets/images/clients-logo/client-logo-5.png';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const logos = [ logo1, logo2, logo3, logo4, logo5, logo1, logo2, logo3, logo4, logo5 ];
    const settings = {
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 5
        }
      },
      loop: true
    }
    return {
      logos,
      settings
    }
  },
  props: {
    title: {
      type: Boolean,
      default: false
    }
  }
}
</script>

