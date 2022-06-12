<script lang="ts">
  import { onMount } from 'svelte';

  interface IPositions {
    c2left: number;
    c2top: number;
    c3left: number;
    c3top: number;
    c4left: number;
    c4top: number;
    c5left: number;
    c5top: number;
    c6left: number;
    c6top: number;
    c7left: number;
    c7top: number;
    c8left: number;
    c8top: number;
    c9left: number;
    c9top: number;
  }

  let section: HTMLElement;
  let l2: HTMLElement;
  let l3: HTMLElement;
  let l4: HTMLElement;
  let l5: HTMLElement;
  let l6: HTMLElement;
  let l7: HTMLElement;
  let l8: HTMLElement;
  let l9: HTMLElement;

  let positions: IPositions;

  const mouseParallax = (el: HTMLDivElement, left: number, top: number, mouseX: number, mouseY: number, speed: number) => {
    const parentObj = el.parentNode as HTMLElement;
    const containerWidth = parseInt(parentObj.offsetWidth.toString());
    const containerHeight = parseInt(parentObj.offsetHeight.toString());
    el.style.left = left - (((mouseX - (parseInt(el.offsetWidth.toString()) / 2 + left)) / containerWidth) * speed) + 'px';
    el.style.top = top - (((mouseY - (parseInt(el.offsetHeight.toString()) / 2 + top)) / containerHeight) * speed) + 'px';
  };

  const onMouseMoveSection = (e: MouseEvent) => {
    if ( window.matchMedia("(pointer: coarse)").matches ) return;
    const event = e || window.event;
    const x = event.clientX - (section as HTMLElement).offsetLeft;
    const y = event.clientY - (section as HTMLElement).offsetTop;
    const pos = positions;
    mouseParallax(l2 as HTMLDivElement, pos.c2left, pos.c2top, x, y, 25);
    mouseParallax(l3 as HTMLDivElement, pos.c3left, pos.c3top, x, y, 20);
    mouseParallax(l4 as HTMLDivElement, pos.c4left, pos.c4top, x, y, 35);
    mouseParallax(l5 as HTMLDivElement, pos.c5left, pos.c5top, x, y, 30);
    mouseParallax(l6 as HTMLDivElement, pos.c6left, pos.c6top, x, y, 45);
    mouseParallax(l7 as HTMLDivElement, pos.c7left, pos.c7top, x, y, 30);
    mouseParallax(l8 as HTMLDivElement, pos.c8left, pos.c8top, x, y, 25);
    mouseParallax(l9 as HTMLDivElement, pos.c9left, pos.c9top, x, y, 40);
  }

  onMount(() => {
    if ( !window.matchMedia("(pointer: coarse)").matches) {
      setTimeout(() => {
        positions = {
          c2left: l2.offsetLeft,
          c2top: l2.offsetTop,
          c3left: l3.offsetLeft,
          c3top: l3.offsetTop,
          c4left: l4.offsetLeft,
          c4top: l4.offsetTop,
          c5left: l5.offsetLeft,
          c5top: l5.offsetTop,
          c6left: l6.offsetLeft,
          c6top: l6.offsetTop,
          c7left: l7.offsetLeft,
          c7top: l7.offsetTop,
          c8left: l8.offsetLeft,
          c8top: l8.offsetTop,
          c9left: l9.offsetLeft,
          c9top: l9.offsetTop
        };
      }, 500)
    }

    return () => {
      if ( section ) {
        section.removeEventListener('mousemove', onMouseMoveSection )
      }
    }
  })

  $: if ( positions ) {
    if ( section as HTMLElement ) {
      section.addEventListener('mousemove', onMouseMoveSection );
    }
  }

</script>

<section class="hero-area bg-primary" id="parallax" bind:this={section}>
  <div class="container">
    <div class="row">
      <div class="col-lg-11 mx-auto">
        <h1 class="text-white font-tertiary">Hi! I’m <br> Christoher <br> UX designer</h1>
      </div>
    </div>
  </div>
  <div class="layer-bg w-100">
    <img src="/images/illustrations/leaf-bg.png" class="img-fluid w-100" alt="bg-shape" />
  </div>
  <div class="layer" id="l2" bind:this={l2}>
    <img src="/images/illustrations/dots-cyan.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l3" bind:this={l3}>
    <img src="/images/illustrations/leaf-orange.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l4" bind:this={l4}>
    <img src="/images/illustrations/dots-orange.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l5" bind:this={l5}>
    <img src="/images/illustrations/leaf-yellow.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l6" bind:this={l6}>
    <img src="/images/illustrations/leaf-cyan.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l7" bind:this={l7}>
    <img src="/images/illustrations/dots-group-orange.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l8" bind:this={l8}>
    <img src="/images/illustrations/leaf-pink-round.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l9" bind:this={l9}>
    <img src="/images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
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

<style>
  .hero-area {
    max-width: 100vw;
  }
</style>
