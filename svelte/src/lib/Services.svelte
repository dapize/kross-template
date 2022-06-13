<script lang="ts" context="module">
  export interface IService {
    title: string;
    description: string;
    classIcon: string;
    active?: boolean;
  }
</script>

<script lang="ts">
  export let list: IService[];
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title">Services</h2>
      </div>
      {#each list as { active, classIcon, title, description }}
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="card hover-shadow shadow" class:active-bg-primary={active}>
            <div class="card-body text-center px-4 py-5">
              <i class={`icon mb-5 d-inline-block ${classIcon}`}/>
              <h4 class="mb-4">{title}</h4>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
