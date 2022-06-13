<script context="module" lang="ts">
  export interface IPost {
    image: string;
    title: string;
    description: string;
    url: string;
  }
</script>

<script lang="ts">
  export let list: IPost[]
</script>

<section class="section">
  <div class="container">
    <div class="row">
      {#each list as { image, title, url, description }}
        <div class="col-lg-4 col-sm-6 mb-4">
          <article class="card shadow">
            <img src={image} class="rounded card-img-top" alt="post-thumb" width="371" height="270" loading="lazy"/>
            <div class="card-body">
              <h4 class="card-title">
                <a class="text-dark" href={`/blog/${url}#post`}>
                  { title }
                </a>
              </h4>
              <p class="cars-text">{ description }</p>
              <a class="btn btn-xs btn-primary" href={`/blog/${url}#post`}>Read More</a>
            </div>
          </article>
        </div>
      {/each}
    </div>
  </div>
</section>
