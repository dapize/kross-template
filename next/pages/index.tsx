import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head'

import { Hero } from '@components/Hero'
import { PreAbout } from '@components/PreAbout'
import { ISkill, Skills } from '@components/Skills'
import { Experience, IExperience } from '@components/Experience'
import { Education, ILearning } from '@components/Education'
import { IService, Services } from '@components/Services';
import { IProject, Portfolio } from '@components/Portfolio';
import { ITestimonial, Testimonials } from '@components/Testimonials';
import { Clients, ILogo } from '@components/Clients';

import { skills } from '@services/skills';
import { experiences } from '@services/experiences';
import { learnings } from '@services/learnings';
import { services } from '@services/services';
import { projects } from '@services/projects';
import { testimonials } from '@services/testimonials';
import { clients } from '@services/clients';

interface IHome {
  skills: ISkill[];
  experiences: IExperience[];
  learnings: ILearning[];
  services: IService[];
  projects: IProject[];
  testimonials: ITestimonial[];
  clientLogos: ILogo[];
}

const Home: NextPage<IHome> = ({
  skills: skillsList,
  experiences: experiencesList,
  learnings: learningsList,
  services: servicesList,
  projects,
  testimonials: testimonialList,
  clientLogos
}) => {
  return (
    <>
      <Head>
        <title>Kross Creative Template</title>
      </Head>
      <Hero />
      <PreAbout/>
      <Skills list={skillsList}/>
      <Experience list={experiencesList}/>
      <Education list={learningsList}/>
      <Services list={servicesList}/>
      <Portfolio projects={projects}/>
      <Testimonials list={testimonialList}/>
      <Clients logos={clientLogos}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getSkills = await skills();
  const getExperiences = await experiences();
  const getLearnings = await learnings();
  const getServices = await services();
  const getProjects = await projects();
  const getTestimonials = await testimonials();
  const getClients = await clients();

  return {
    props: {
      skills: getSkills.data.list,
      experiences: getExperiences.data.list,
      learnings: getLearnings.data.list,
      services: getServices.data.list,
      projects: getProjects.data.list,
      testimonials: getTestimonials.data.list,
      clientLogos: getClients.data.logos
    }
  }
}

export default Home
