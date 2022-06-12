<script>
import Header from '$lib/Header.svelte';
import Hero from '$lib/Hero.svelte';
import Footer from '$lib/Footer.svelte';
import Contact from '$lib/Contact.svelte';
</script>

<Header/>
<Hero/>
<slot />
<Contact/>
<Footer/>

