<script lang="ts">
  import { onMount } from 'svelte';

  interface ILink {
    href: string;
    name: string;
  }

  const links: ILink[] = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/blog', name: 'Blog' },
    { href: '/portfolio', name: 'Portfolio' },
    { href: '/contact', name: 'Contact' }
  ];

  let menuOpened = false;
  let navBg = false;
  let main: HTMLElement;

  const openMenu = () => {
    if (window.matchMedia("(max-width: 991px)").matches) {
      menuOpened = !menuOpened
    }
  }

  const fnScroll = () => {
    if ( main ) {
      const rect = main.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      navBg = top > 100;
    }
  };

  onMount(() => {
    window.addEventListener('scroll', fnScroll);

    return () => {
      window.removeEventListener('scroll', fnScroll);
    }
  })

</script>

<header class="navigation fixed-top" bind:this={main} id="main-header" class:nav-bg={navBg}>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a href="/" class="navbar-brand font-tertiary h3">
      <img src="/images/logo.png" alt="Myself" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navigation"
      aria-controls="navigation"
      aria-expanded={menuOpened}
      aria-label="Toggle navigation"
      on:click={openMenu}
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="navigation" class:show={menuOpened}>
      <ul class="navbar-nav ml-auto">
        {#each links as link}
          <li class="nav-item">
            <a class="nav-link" href={link.href} on:click={openMenu}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</header>
