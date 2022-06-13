<script lang="ts" context="module">
  export interface ILearning {
    title: string;
    year: number;
    institution: string;
  }
</script>

<script lang="ts">
  export let list: ILearning[];
</script>

<section class="section position-relative">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-title">Education</h2>
      </div>
      {#each list as { year, title, institution }}
        <div class="col-lg-6 col-md-6 mb-80">
          <div class="d-flex">
            <div class="mr-lg-5 mr-3">
              <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
            </div>
            <div>
              <p class="text-dark mb-1">{ year }</p>
              <h4>{ title }</h4>
              <p class="mb-0 text-light">{ institution }</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <img
    src="/images/backgrounds/education-bg.png"
    class="img-fluid edu-bg-image w-100"
    alt="Education"
    width="1595"
    height="1199"
    loading="lazy"
  />
</section>
