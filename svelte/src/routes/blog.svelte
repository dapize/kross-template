<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  export const prerender = true;

  export const load: Load = async ({ fetch }) => {
    const urls = [
      '/api/clients',
      '/api/posts'
    ];
    const promises = urls.map( url => fetch(url) );
    let [clientLogosReq, postsReq] = await Promise.all(promises);

    const { logos: clientLogos } = await clientLogosReq.json();
    const { list: postList } = await postsReq.json();

    return {
      props: {
        clientLogos,
        postList
      }
    }
  }
</script>

<script lang="ts">
  import Clients from "$lib/Clients.svelte";
  import PageTitle from '$lib/PageTitle.svelte';
  import Posts from '$lib/Posts.svelte';

  import type { Ilogo } from "$lib/Clients.svelte";
  import type { IPost } from '$lib/Posts.svelte';

  export let clientLogos: Ilogo[];
  export let postList: IPost[];
</script>

<svelte:head>
  <title>Blogs | Kross Creative Template</title>
</svelte:head>

<PageTitle align="center">Blogs</PageTitle>
<Posts list={postList}/>
<Clients logos={clientLogos} title/>
