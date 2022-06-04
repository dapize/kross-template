import React from 'react'
import { GetStaticProps, NextPage } from 'next'

import { PageTitle } from '@components/PageTitle';
import { Clients } from '@components/Clients';
import { Portfolio } from '@components/Portfolio';

import { IPortfolio } from './portfolio.d';
import { portfolio } from '@services/portfolio';
import { clients } from '@services/clients';
import Head from 'next/head';

const PortfolioPage: NextPage<IPortfolio> = ({
  projects,
  filters,
  clientLogos
}) => {
  return (
    <>
      <Head>
        <title>Portfolio | Kross Creative Template</title>
      </Head>
      <PageTitle align="center">Portfolio</PageTitle>
      <Portfolio projects={projects} title={false} filters={filters}/>
      <Clients logos={clientLogos}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getPortfolio = await portfolio();
  const { projects, filters } = getPortfolio.data;
  const getClients = await clients();

  return {
    props: {
      clientLogos: getClients.data.logos,
      projects,
      filters
    }
  }
}

export default PortfolioPage
