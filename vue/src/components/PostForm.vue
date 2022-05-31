<script setup>
import Button from './Button.vue';
import { ref } from 'vue';

const submitting = ref(false);
const dataInit = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
}
const dataForm = ref({ ...dataInit})

const emit = defineEmits(['onSubmit']);

const resetForm = () => {
  dataForm.value.firstName = '';
  dataForm.value.lastName = '';
  dataForm.value.email = '';
  dataForm.value.message = '';
}

const onSubmit = () => {
  submitting.value = true;

  setTimeout(() => {
    const data = {
      firstName: dataForm.value.firstName,
      lastName: dataForm.value.lastName,
      email: dataForm.value.email,
      message: dataForm.value.message
    }
    emit('onSubmit', data);
    resetForm();
    submitting.value = false;
  }, 2500)
}
</script>
<template>
  <div class="mt-5">
    <h4 class="font-weight-bold mb-3 border-bottom pb-3">Leave a Comment</h4>
    <form action="#" class="row" @submit.prevent="onSubmit">
      <div class="col-md-6">
        <input type="text" class="form-control mb-3" placeholder="First Name" name="fname" id="fname" v-model="dataForm.firstName" required>
        <input type="text" class="form-control mb-3" placeholder="Last Name" name="lname" id="lname" v-model="dataForm.lastName" required>
        <input type="text" class="form-control mb-3" placeholder="Email *" name="mail" id="mail" v-model="dataForm.email" required>
      </div>
      <div class="col-md-6">
        <textarea name="comment" id="comment" placeholder="Message" class="form-control mb-4" v-model="dataForm.message"></textarea>
        <Button :loading="submitting">Send Message</Button>
      </div>
    </form>
  </div>
</template>

