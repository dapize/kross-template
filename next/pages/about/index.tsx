import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { AboutDescription } from '@components/AboutDescription'
import { Clients } from '@components/Clients'
import { PageTitle } from '@components/PageTitle'
import { Team } from '@components/Team'
import { WorkProcess } from '@components/WorkProcess'

import { IAbout } from './about'

import { workProcess } from '@services/workProcess'
import { team } from '@services/team'
import { clients } from '@services/clients'

const about: NextPage<IAbout> = ({
  workProcess: workProcessList,
  members,
  clientLogos
}) => {
  return (
    <>
      <Head>
        <title>About | Kross Creative</title>
      </Head>
      <PageTitle>About Me</PageTitle>
      <AboutDescription/>
      <WorkProcess list={workProcessList}/>
      <Team members={members}/>
      <Clients logos={clientLogos} title/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getWorkProcess = await workProcess();
  const getTeam = await team();
  const getClients = await clients();

  return {
    props: {
      workProcess: getWorkProcess.data.list,
      members: getTeam.data.members,
      clientLogos: getClients.data.logos
    }
  }
}

export default about;
