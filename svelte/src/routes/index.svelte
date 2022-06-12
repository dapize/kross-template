<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const request  = await fetch('/api/skills');
    const { list } = await request.json();

    return {
      props: {
        status: request.status,
        skillsList: list
      }
    }
  }
</script>

<script lang="ts">
  import PreAbout from "$lib/PreAbout.svelte";
  import Skills from "$lib/Skills.svelte";
  import type { ISkill } from '$lib/Skills.svelte';

  export let skillsList: ISkill[];
</script>

<svelte:head>
  <title>Kross Creative Template</title>
</svelte:head>

<PreAbout/>
<Skills list={skillsList}/>
