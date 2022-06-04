import React, { useState, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { post } from '@services/post'
import { PageTitle } from '@components/PageTitle'
import { Post } from '@components/Post'
import { IPost } from '@components/Post'
import { Comments, INewComment } from '@components/Comments'

import { IParams } from './post.d'

const PostPage: NextPage<IPost> = (props) => {
  const [comments, setComments] = useState([]);

  const handleNewComment = ( comment: INewComment ) => {

  }

  useEffect(() => {
    //first

    return () => {
      //second
    }
  }, [])


  return (
    <>
      <Head>
        <title>{props.title} | Kross Creative Template {'>'} Blog</title>
      </Head>
      <PageTitle align="center">Blogs</PageTitle>
      <a id="post"></a>
      <Post { ...props }/>
      { comments.length && (
        <Comments
          list={comments}
          onCommentAdded={handleNewComment}
        />
      )}
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
