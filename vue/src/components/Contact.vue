<script setup>
  import { ref } from 'vue'
  import Button from './Button.vue';

  const initData = {
    name: '',
    email: '',
    message: ''
  }

  const data = ref({ ...initData });

  const submitting = ref(false);

  const submitHandler = () => {
    if (data.value.name.trim() === '' || data.value.email.trim() === '' || data.value.message.trim() === '') {
      alert('Some fields are empty');
      return;
    }

    submitting.value = true;

    setTimeout(() => {
      submitting.value = false;
      data.value = {
        ...initData
      }
      alert('contact sent')
    }, 2500)
  }

</script>

<template>
  <section class="section section-on-footer bg-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Contact Info</h2>
        </div>
        <div class="col-lg-8 mx-auto">
          <div class="bg-white rounded p-5 shadow-down">
            <h4 class="mb-80 text-center">Contact Form</h4>
             <form class="row" @submit.prevent="submitHandler">
              <div class="col-md-6 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  class="form-control px-0"
                  v-model="data.name"
                  required
                >
              </div>

              <div class="col-md-6 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  class="form-control px-0"
                  v-model="data.email"
                  required
                >
              </div>

              <div class="col-12 mb-4">
                <textarea
                  name="message"
                  class="form-control px-0 mb-4"
                  placeholder="Type Message Here"
                  v-model="data.message"
                  required>
                </textarea>
              </div>

              <div class="col-lg-6 col-10 mx-auto">
                <Button :loading="submitting">Send</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.bg-section {
  background-image: url('../assets/images/backgrounds/bg-dots.png');
}
</style>
