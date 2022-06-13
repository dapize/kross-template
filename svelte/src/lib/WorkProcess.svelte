<script context="module" lang="ts">
  export interface IIcon {
    image: string;
    width: number;
    height: number;
  }

  export interface IProcess {
    title: string;
    description: string;
    icon: IIcon;
  }
</script>

<script lang="ts">
  export let list: IProcess[];
</script>

<section class="section">
  <div class="container">
    <div class="row justify-content-around">
      <div class="col-lg-12 text-center">
        <h2 class="section-title">Work Process</h2>
      </div>
      {#each list as { title, icon, description }}
        <div class="col-lg-3 col-md-4 text-center hover-shadow pt-3">
          <img loading="lazy" src={icon.image} class="mb-4" alt="icon" width={icon.width} height={icon.height}/>
          <h4 class="mb-4">{title}</h4>
          <p>{description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
