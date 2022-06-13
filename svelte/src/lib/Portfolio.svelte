<script lang="ts" context="module">
  export interface IFilter {
    title: string;
    value: string;
    active?: boolean;
  }

  export interface IProject {
    image: string;
    groups?: string[];
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import Shuffle from 'shufflejs';

  export let title: boolean = true;
  export let filters: IFilter[] = [];
  export let projects: IProject[];

  let shuffleWrapper: HTMLElement;
  let shuffleInstance: Shuffle;
  let filterItems:IFilter[] = filters;

  const updateShuffleFilter = ( value: string ) => {
    (shuffleInstance as Shuffle).filter(value);
  }

  const onChangeHandler = (event: Event ) => {
    const itemActive = (event.currentTarget as HTMLInputElement).value;
    updateShuffleFilter(itemActive);
    filterItems = filterItems.map((item: IFilter) => ({ ...item, active: item.value === itemActive}))
  }

  onMount(() => {
    if ( shuffleWrapper ) {
      setTimeout(() => {
        shuffleInstance = new Shuffle(shuffleWrapper as HTMLDivElement, {
          itemSelector: '.shuffle-item',
          buffer: 1
        });
      }, 500)
    }
  })
</script>

<section class="section">
  <div class="container">
    {#if title}
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Portfolio</h2>
        </div>
      </div>
    {/if}

    {#if filters.length}
      <div class="row mb-5">
        <div class="col-12">
          <div class="btn-group btn-group-toggle justify-content-center d-flex" data-toggle="buttons">
            {#each filterItems as { active, value, title }}
              <label class={`btn btn-sm btn-primary ${active && 'active'}`}>
                <input type="radio" name="shuffle-filter" value={value} checked={active} on:change={onChangeHandler} /> { title }
              </label>
            {/each}
          </div>
        </div>
      </div>
    {/if}

    <div class="row shuffle-wrapper" bind:this={shuffleWrapper}>
      {#each projects as { groups, image }}
        <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups={groups && `["${groups.join('","')}"]`}>
          <div class="position-relative rounded hover-wrapper">
            <img src={image} alt="Project" class="img-fluid rounded w-100"/>
            <div class="hover-overlay">
              <div class="hover-content">
                <span class="btn btn-light btn-sm">view project</span>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @media screen and (max-width: 479px) {
    .btn-primary {
      font-size:  13px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
</style>
