<script context="module" lang="ts">
  export interface IMember {
    name: string;
    role: string;
    image: string;
  }
</script>

<script lang="ts">
  export let members: IMember[];
</script>

<section class="section bg-cover">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title">My Team</h2>
      </div>
      {#each members as { image, name, role }}
        <div class="col-md-4 col-sm-6 mb-4 mb-md-0">
          <div class="card text-center">
            <img loading="lazy" src={image} class="card-img-top" width="368" height="376" alt={name} />
            <div class="card-body">
              <h4 class="card-title">{name}</h4>
              <p class="text-light font-secondary">{role}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    background-image: url('/images/backgrounds/team-bg.png');
  }
</style>
