<script lang="ts">
  export let align: 'left' | 'center' = 'left';
</script>

<section class={`bg-primary position-relative ${align === 'left' ? 'page-title-alt' : 'page-title'}`}>
  <div class="container">
    <div class="row">
      <div class={`col-12 ${align === 'center' && 'text-center'}`}>
        <h1 class="text-white font-tertiary">
          <slot/>
        </h1>
      </div>
    </div>
  </div>
  {#if align === 'left'}
    <img loading="lazy" src="/images/illustrations/leaf-bg-top.png" alt="illustrations" class="bg-shape-1 w-100" width="1600" height="517"/>
    <img loading="lazy" src="/images/illustrations/dots-group-sm.png" alt="illustrations" class="bg-shape-2" width="74" height="54"/>
    <img loading="lazy" src="/images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-3" width="346" height="285"/>
    <img loading="lazy" src="/images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4" width="72" height="93"/>
    <img loading="lazy" src="/images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-5" width="74" height="54"/>
    <img loading="lazy" src="/images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-6" width="464" height="291"/>
  {:else}
    <img loading="lazy" src="/images/illustrations/page-title.png" alt="illustrations" class="bg-shape-1 w-100" width="1600" height="502"/>
    <img loading="lazy" src="/images/illustrations/leaf-pink-round.png" alt="illustrations" class="bg-shape-2" width="84" height="68"/>
    <img loading="lazy" src="/images/illustrations/dots-cyan.png" alt="illustrations" class="bg-shape-3" width="165" height="9"/>
    <img loading="lazy" src="/images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4" width="72" height="93"/>
    <img loading="lazy" src="/images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-5" width="346" height="285"/>
    <img loading="lazy" src="/images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-6" width="74" height="54"/>
    <img loading="lazy" src="/images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-7" width="464" height="291"/>
  {/if}
</section>

<style>
  section {
    max-width: 100vw;
    overflow: hidden;
  }
</style>
