import { AboutDescription } from '@components/AboutDescription'
import { Clients } from '@components/Clients'
import { PageTitle } from '@components/PageTitle'
import { Team } from '@components/Team'
import { WorkProcess } from '@components/WorkProcess'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
      <Head>
        <title>About | Kross Creative</title>
      </Head>
      <PageTitle>About Me</PageTitle>
      <AboutDescription/>
      <WorkProcess/>
      <Team/>
      <Clients title />
    </>
  )
}

export default about;
