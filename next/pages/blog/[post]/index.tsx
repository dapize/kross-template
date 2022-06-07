import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { post } from '@services/post'

import { PageTitle } from '@components/PageTitle'
import { Post } from '@components/Post'
import { IPost } from '@components/Post'
import { Comments } from '@components/Comments'

import { IParams } from './post.d'

const PostPage: NextPage<IPost> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title} | Kross Creative Template {'>'} Blog</title>
      </Head>
      <PageTitle align="center">Blogs</PageTitle>
      <a id="post"></a>
      <Post { ...props }/>
      <Comments postId={props.id}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ( context ) => {
  const params = context.params as IParams;
  const getPost = await post( params.id );

  return {
    props: {
      ...getPost.data
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          id: '1',
          post: 'single'
        }
      }
    ],
    fallback: false
  }
}

export default PostPage
