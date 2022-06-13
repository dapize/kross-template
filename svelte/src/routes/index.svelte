<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  export const prerender = true;

  export const load: Load = async ({ fetch }) => {
    const urls = [
      '/api/skills',
      '/api/experiences',
      '/api/learnings',
      '/api/services',
      '/api/projects',
      '/api/testimonials',
      '/api/clients'
    ];
    const promises = urls.map( url => fetch(url) );

    let [skillsReq, experiencesReq, learningsReq, servicesReq, projectsReq, testimonialsReq, clientLogosReq] = await Promise.all(promises);

    const { list: skillsList } = await skillsReq.json();
    const { list: experiencesList } = await experiencesReq.json();
    const { list: learningsList } = await learningsReq.json();
    const { list: servicesList } = await servicesReq.json();
    const { list: projects } = await projectsReq.json();
    const { list: testimonialList } = await testimonialsReq.json();
    const { logos: clientLogos } = await clientLogosReq.json();

    return {
      props: {
        skillsList,
        experiencesList,
        learningsList,
        servicesList,
        projects,
        testimonialList,
        clientLogos
      }
    }
  }
</script>

<script lang="ts">
  import Hero from '$lib/Hero.svelte';
  import PreAbout from "$lib/PreAbout.svelte";
  import Skills from "$lib/Skills.svelte";
  import Experience from '$lib/Experience.svelte';
  import Education from '$lib/Education.svelte';
  import Services from '$lib/Services.svelte';
  import Portfolio from "$lib/Portfolio.svelte";
  import Testimonials from '$lib/Testimonials.svelte';
  import Clients from "$lib/Clients.svelte";

  import type { ISkill } from '$lib/Skills.svelte';
  import type { IExperience } from '$lib/Experience.svelte';
  import type { ILearning } from '$lib/Education.svelte';
  import type { IService } from '$lib/Services.svelte';
  import type { IProject } from "$lib/Portfolio.svelte";
  import type { ITestimonial } from '$lib/Testimonials.svelte';
  import type { Ilogo } from "$lib/Clients.svelte";

  export let skillsList: ISkill[];
  export let experiencesList: IExperience[];
  export let learningsList: ILearning[];
  export let servicesList: IService[];
  export let projects: IProject[];
  export let testimonialList:  ITestimonial[];
  export let clientLogos: Ilogo[];
</script>

<svelte:head>
  <title>Kross Creative</title>
</svelte:head>
<Hero/>
<PreAbout/>
<Skills list={skillsList}/>
<Experience list={experiencesList}/>
<Education list={learningsList}/>
<Services list={servicesList}/>
<Portfolio { projects }/>
<Testimonials list={testimonialList}/>
<Clients logos={clientLogos}/>
