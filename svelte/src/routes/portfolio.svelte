<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  export const prerender = true;

  export const load: Load = async ({ fetch }) => {
    const urls = [
      '/api/clients',
      '/api/portfolio'
    ];
    const promises = urls.map( url => fetch(url) );
    let [clientLogosReq, portfolioReq] = await Promise.all(promises);

    const { logos: clientLogos } = await clientLogosReq.json();
    const { projects, filters } = await portfolioReq.json();

    return {
      props: {
        clientLogos,
        projects,
        filters
      }
    }
  }
</script>

<script lang="ts">
  import Clients from "$lib/Clients.svelte";
  import PageTitle from '$lib/PageTitle.svelte';
  import Portfolio from "$lib/Portfolio.svelte";

  import type { Ilogo } from "$lib/Clients.svelte";
  import type { IProject, IFilter } from "$lib/Portfolio.svelte";

  export let clientLogos: Ilogo[];
  export let projects: IProject[];
  export let filters: IFilter[];
</script>

<svelte:head>
  <title>Portfolio | Kross Creative Template</title>
</svelte:head>

<PageTitle align="center">Portfolio</PageTitle>
<Portfolio projects={projects} title={false} filters={filters}/>
<Clients logos={clientLogos} title/>
