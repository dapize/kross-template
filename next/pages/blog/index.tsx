import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Clients } from '@components/Clients'
import { PageTitle } from '@components/PageTitle'
import { Posts } from '@components/Posts'

import { clients } from '@services/clients'
import { posts } from '@services/posts'

import { IBlog } from './blog.d'

const Blog: NextPage<IBlog> = ({
  clientLogos,
  posts: postList
}) => {
  return (
    <>
      <Head>
        <title>Blogs | Kross Creative Template</title>
      </Head>
      <PageTitle align="center">Blogs</PageTitle>
      <Posts list={postList}/>
      <Clients logos={clientLogos} title/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getClients = await clients();
  const getPosts = await posts();

  return {
    props: {
      clientLogos: getClients.data.logos,
      posts: getPosts.data.list
    },
    revalidate: 60 * 60
  }
}

export default Blog
