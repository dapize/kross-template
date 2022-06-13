<script context="module" lang="ts">
  export interface IDataForm {
    firstName: string;
    lastName: string
    email: string;
    comment: string;
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import md5 from 'md5';
  import { format } from 'date-fns'
  import { toast } from '@zerodevx/svelte-toast'
  import Submit from "./Submit.svelte";

  const dispatch = createEventDispatcher();

  const initData: IDataForm = {
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  }

  let data: IDataForm = { ...initData };
  let disabled = false;
  let isLoading = false;

  const onSubmit = async () => {
    if (data.firstName.trim() === '' || data.lastName.trim() === '' || data.email.trim() === '' || data.comment.trim() === '') {
      alert('Some fields are empty');
      return;
    }
    disabled = true;
    isLoading = true;

    const commentReq = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const response: { id: number; message: string } = await commentReq.json();
    const { firstName, lastName, comment, email } = data;

    const newComment = {
      id: response.id,
      avatar: 'https://www.gravatar.com/avatar/' + md5(email),
      author: firstName + ' ' + lastName,
      date: format(new Date(), "i MMM y 'At' h:m aaa"),
      content: comment,
    };

    setTimeout(() => {
      disabled = false;
      isLoading = false;
      dispatch('newComment', newComment);
      data = { ...initData };

      toast.push(response.message, {
        theme: {
          '--toastBackground': '#48BB78',
          '--toastBarBackground': '#2F855A'
        }
      })
    }, 2500)
  }

</script>
<div class="mt-5">
  <h4 class="font-weight-bold mb-3 border-bottom pb-3">Leave a Comment</h4>
  <form action="#" class="row" on:submit|preventDefault={onSubmit}>

    <div class="col-md-6">
      <div class="mb-3">
        <input
          type="text"
          placeholder="First Name"
          id="fname"
          class="form-control"
          bind:value={data.firstName}
          {disabled}
        />
      </div>

      <div class="mb-3">
        <input
          type="text"
          placeholder="Last Name"
          id="lname"
          class="form-control"
          bind:value={data.lastName}
          {disabled}
        />
      </div>

      <div class="mb-3">
        <input
          type="text"
          placeholder="Email *"
          id="mail"
          class="form-control"
          bind:value={data.email}
          {disabled}
        />
      </div>
    </div>

    <div class="col-md-6">
      <div class="mb-4">
        <textarea
          id="comment"
          placeholder="Message"
          class="form-control"
          bind:value={data.comment}
          {disabled}
        ></textarea>
      </div>
      <Submit loading={isLoading}>Send Message</Submit>
    </div>
  </form>
</div>
