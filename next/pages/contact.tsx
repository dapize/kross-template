import React from 'react'
import { NextPage } from 'next';
import { PageTitle } from '@components/PageTitle'
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contacts | Kross Creative Template</title>
      </Head>
      <PageTitle align="center">Contacts</PageTitle>
    </>
  )
}

export default Contact;
