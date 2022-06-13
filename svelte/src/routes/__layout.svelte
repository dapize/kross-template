<script>
import { SvelteToast } from '@zerodevx/svelte-toast'
import Header from '$lib/Header.svelte';
import Footer from '$lib/Footer.svelte';
import Contact from '$lib/Contact.svelte';

const options = {
  pausable: true,
  reversed: true,
  intro: {
    y: 50
  }
}
</script>

<Header/>
<slot />
<Contact/>
<Footer/>
<SvelteToast { options }/>

<style>
  :root {
    --toastContainerTop: auto;
    --toastContainerRight: auto;
    --toastContainerBottom: 2rem;
    --toastContainerLeft: calc(50vw - 8rem);
  }
</style>
