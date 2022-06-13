<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch, params }) => {
    const slug = params.title;
    const dataReq = await fetch('/api/post?title=' + slug);
    const data = await dataReq.json();

    return {
      props: {
        data
      }
    }
  }
</script>

<script lang="ts">
  import Comments from "$lib/Comments.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import Post from "$lib/Post.svelte";
  import type { IPost } from "$lib/Post.svelte";

  export let data: IPost;
</script>

<svelte:head>
  <title>{data.title} | Kross Creative Template {'>'} Blog</title>
</svelte:head>
<PageTitle align="center">Blogs</PageTitle>
<!-- svelte-ignore a11y-missing-content -->
<a id="post"></a>
<Post { ...data }/>
<Comments postId={data.id}/>
