<script context="module" lang="ts">
  export interface IPost {
    id: number;
    title: string;
    image: string;
    date: string;
    author: string;
    category: string;
    content: string;
  }
</script>

<script lang="ts">
  export let id: number;
  export let title: string;
  export let image: string;
  export let date: string;
  export let author: string;
  export let category: string;
  export let content: string;
</script>

<section class="section" data-id={id}>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h3 class="font-tertiary mb-3">{title}</h3>
        <p class="font-secondary mb-5">
          Published on {date} by <span class="text-primary">{author}</span> on <span>{category}</span>
        </p>
        <div class="content">
          <img
            loading="lazy"
            src={image}
            alt="post-thumb"
            class="img-fluid rounded float-left mr-5 mb-4"
            width="402"
            height="474"
          />
          {@html content}
        </div>
      </div>
    </div>
  </div>
</section>
