<script lang="ts" context="module">
  export interface IExperience {
    period: string;
    title: string;
    company: string;
    icon: string;
  }
</script>

<script lang="ts">
  export let list: IExperience[]
</script>

<section class="section">
  <div class="container">
    <div class="row justify-content-around">
      <div class="col-lg-12 text-center">
        <h2 class="section-title">Experience</h2>
      </div>
      {#each list as {icon, title, period, company}}
        <div class="col-lg-3 col-md-4 text-center">
          <img src={icon} alt={title} width="110" height="118" loading="lazy"/>
          <p class="mb-0">{period}</p>
          <h4>{title}</h4>
          <h6 class="text-light">{company}</h6>
        </div>
      {/each}
    </div>
  </div>
</section>
