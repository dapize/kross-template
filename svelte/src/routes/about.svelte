<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  export const prerender = true;

  export const load: Load = async ({ fetch }) => {
    const urls = [
      '/api/clients',
      '/api/workprocess',
      '/api/team'
    ];
    const promises = urls.map( url => fetch(url) );

    let [clientLogosReq, workprocessReq, teamReq] = await Promise.all(promises);

    const { logos: clientLogos } = await clientLogosReq.json();
    const { list: workProcessList } = await workprocessReq.json();
    const { members } = await teamReq.json();

    return {
      props: {
        clientLogos,
        workProcessList,
        members
      }
    }
  }
</script>

<script lang="ts">
  import Clients from "$lib/Clients.svelte";
  import PageTitle from '$lib/PageTitle.svelte';
  import AboutDescription from '$lib/AboutDescription.svelte';
  import WorkProcess from '$lib/WorkProcess.svelte';
  import Team from '$lib/Team.svelte';

  import type { Ilogo } from "$lib/Clients.svelte";
  import type { IProcess } from '$lib/WorkProcess.svelte';
  import type { IMember } from '$lib/Team.svelte';

  export let clientLogos: Ilogo[];
  export let workProcessList: IProcess[];
  export let members: IMember[];
</script>

<svelte:head>
  <title>About | Kross Creative</title>
</svelte:head>

<PageTitle>About Me</PageTitle>
<AboutDescription/>
<WorkProcess list={workProcessList}/>
<Team {members}/>
<Clients logos={clientLogos} title/>
