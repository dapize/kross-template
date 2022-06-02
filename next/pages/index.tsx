import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head'

import { Hero } from '@components/Hero'
import { PreAbout } from '@components/PreAbout'
import { ISkill, Skills } from '@components/Skills'
import { Experience, IExperience } from '@components/Experience'
import { Education, ILearning } from '@components/Education'

import { skills } from '@services/skills';
import { experiences } from '@services/experiences';
import { learnings } from '@services/learnings';

interface IHome {
  skills: ISkill[];
  experiences: IExperience[];
  learnings: ILearning[];
}

const Home: NextPage<IHome> = ({
  skills: skillsList,
  experiences: experiencesList,
  learnings: learningsList
}) => {
  return (
    <>
      <Head>
        <title>Kross Creative Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <PreAbout/>
      <Skills list={skillsList}/>
      <Experience list={experiencesList}/>
      <Education list={learningsList}/>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const getSkills = await skills();
  const getExperiences = await experiences();
  const getLearnings = await learnings();

  return {
    props: {
      skills: getSkills.data.list,
      experiences: getExperiences.data.list,
      learnings: getLearnings.data.list
    }
  }
}

export default Home
