<script lang="ts" context="module">
  export interface ISkill {
    title: string;
    percentage: number;
    color: string;
  }
</script>

<script lang="ts">
  export let list: ISkill[];
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-title">Skills</h2>
      </div>
      {#if list}
        {#each list as {color, percentage, title}}
          <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div class="card shadow text-center">
              <div class="position-relative rounded-top progress-wrapper" style={`background-color:${color}`}>
                <div class="wave" style={`bottom: ${percentage}%`} />
              </div>
              <div class="card-footer bg-white">
                <h4 class="card-title">{title} ({percentage}%)</h4>
              </div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>
