<script lang="ts">
  export let avatar: string;
  export let author: string;
  export let date: string;
  export let last: boolean = false;
</script>

<div class="media py-4" class:border-bottom={last}>
  <img
    src={avatar}
    class="img-fluid align-self-start rounded-circle mr-3"
    alt="avatar"
    width="61"
    height="61"
    loading="lazy"
  />
  <div class="media-body">
    <h5 class="mt-0">{author}</h5>
    <p>{date}</p>
    <p><slot/></p>
  </div>
</div>
