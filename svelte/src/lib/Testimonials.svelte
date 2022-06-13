<script context="module" lang="ts">
  export interface ITestimonial {
    author: string;
    role: string;
    content: string;
    avatar: string;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Pagination, A11y } from 'swiper';
  import 'swiper/css';

  export let list: ITestimonial[];

  let isSSR: boolean = true;

  const modules = [Pagination, A11y];

  onMount(() => {
    isSSR = false;
  })
</script>

<section class="section bg-primary position-relative testimonial-bg-shapes">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title text-white mb-5">Testimonials</h2>
      </div>
      <div class="col-lg-10 mx-auto">
        {#if !isSSR}
          <Swiper
            modules={ modules }
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop
          >
            {#each list as { content, avatar, author, role }}
              <SwiperSlide class="text-center d-block outline-0 p-4">
                <i class="ti-quote-right text-white icon mb-4 d-inline-block" />
                <p class="text-white mb-4">
                  {@html content}
                </p>
                <img loading="lazy" src={ avatar } class="img-fluid rounded-circle mb-4 d-inline-block" alt="Testimonial" width="106" height="106"/>
                <h4 class="text-white">{ author }</h4>
                <h6 class="text-light mb-4">{ role }</h6>
              </SwiperSlide>
            {/each}
          </Swiper>
        {/if}
      </div>
    </div>
  </div>
  <img src="/images/backgrounds/map.png" alt="map" class="img-fluid bg-map" loading="lazy" width="1088" height="601"/>
  <img src="/images/illustrations/dots-group-v.png" alt="bg-shape" class="img-fluid bg-shape-1" loading="lazy" width="74" height="123"/>
  <img src="/images/illustrations/leaf-orange.png" alt="bg-shape" class="img-fluid bg-shape-2" loading="lazy" width="72" height="93"/>
  <img src="/images/illustrations/dots-group-sm.png" alt="bg-shape" class="img-fluid bg-shape-3" loading="lazy" width="74" height="54"/>
  <img src="/images/illustrations/leaf-pink-round.png" alt="bg-shape" class="img-fluid bg-shape-4" loading="lazy" width="84" height="68"/>
  <img src="/images/illustrations/leaf-cyan.png" alt="bg-shape" class="img-fluid bg-shape-5" loading="lazy" width="169" height="96"/>
</section>

<style lang="scss" global>
  .swiper-pagination {
    text-align: center;
    padding-left: 0;
  }

  .swiper-pagination-bullet {
    display: inline-block;
    margin: 2px;
    height: 6px;
    width: 12px;
    background: rgba(255, 255, 255, 0.5);
    color: transparent;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.2s ease;
    border: 0;

    &-active {
      background: #fff;
      width: 25px;
    }
  }
</style>
