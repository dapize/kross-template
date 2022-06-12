<script lang="ts">
  import Submit from "$lib/Submit.svelte";
  let isLoading: boolean = false;
</script>

<section class="section section-on-footer">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title">Contact Info</h2>
      </div>
      <div class="col-lg-8 mx-auto">
        <div class="bg-white rounded p-5 shadow-down">
          <h4 class="mb-80 text-center">Contact Form</h4>
          <form class="row">
            <div class="col-md-6 mb-4">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                class="form-control px-0"
              />
            </div>
            <div class="col-md-6 mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                class="form-control px-0"
              />
            </div>
            <div class="col-12 mb-4">
              <textarea
                id="message"
                placeholder="Type Message Here"
                class="form-control px-0"
              />
            </div>
            <div class="col-lg-6 col-10 mx-auto">
              <Submit loading={isLoading}>send</Submit>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background-image: url('/images/backgrounds/bg-dots.png');
  }
</style>
