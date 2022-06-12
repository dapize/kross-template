<script lang="ts">
  export let loading: boolean = false;
</script>

<button
  class="btn btn-primary w-100"
  disabled={loading}
>
  {#if loading}
    <span
      class="spinner-border spinner-border-md"
      role="status"
      aria-hidden="true">
    </span>
  {:else}
    <slot/>
  {/if}
</button>
