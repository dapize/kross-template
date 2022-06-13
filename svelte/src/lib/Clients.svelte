<script context="module" lang="ts">
  export interface Ilogo {
    image: string,
    width: number;
    height: number;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Autoplay } from 'swiper'
  import 'swiper/css';
  import 'swiper/css/autoplay';

  export let title: boolean = false;
  export let logos: Ilogo[];

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
    loop: true,
    autoplay: true
  };

  const modules = [Autoplay];

  let isSSR: boolean = true;

  onMount(() => {
    isSSR = false;
  })
</script>
<section class={`section ${title ? 'bg-light' : 'pb-0'}`}>
  <div class="container">
    {#if title}
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">My Clients</h2>
        </div>
      </div>
    {/if}
    <div class="row">
      <div class="col-12">
        <div class="client-logo-slider d-flex align-items-center">
          {#if !isSSR}
            <Swiper { ...settings } modules={ modules }>
              {#each logos as { image, width, height }}
                <SwiperSlide class="text-center d-block outline-0 p-4">
                  <img loading="lazy" class="d-unset img-fluid" src={image} alt="client-logo" width={width} height={height}/>
                </SwiperSlide>
              {/each}
            </Swiper>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
