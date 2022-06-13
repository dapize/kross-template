<script context="module" lang="ts">
  export interface IComment {
    id: number;
    avatar: string;
    author: string;
    date: string;
    content: string;
  }
</script>

<script lang="ts">
  import inView from "$actions/inView";
  import Comment from "./Comment.svelte";
  import FormComment from "./FormComment.svelte";

  export let postId: number;

  let commentsTotal: number | string = 'Loading';
  let items: IComment[] = [];

  const reqComments = async () => {
    const data = await fetch('/api/comments?id=' + postId);
    const { list } = await data.json();
    items = list;
    commentsTotal = list.length;
  }

  const handleCommentAdded = async ( event: CustomEvent<IComment> ) => {
    items = [ ...items, event.detail ];
  }
</script>

<section use:inView={reqComments}>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h4 class="font-weight-bold mb-3">Comments {commentsTotal}</h4>
        {#if items.length}
          <div class="bg-gray p-5 mb-4">
            {#each items as item, index}
              <Comment
                avatar={item.avatar}
                author={item.author}
                date={item.date}
                last={commentsTotal !== (index + 1)}
              >
                {item.content}
              </Comment>
            {/each}
          </div>
        {:else}
          <div class="my-3">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        {/if}
        <FormComment on:newComment={handleCommentAdded}/>
      </div>
    </div>
  </div>
</section>
