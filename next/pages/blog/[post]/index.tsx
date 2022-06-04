import React from 'react'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { post } from '@services/post'
import { PageTitle } from '@components/PageTitle'

import { IParams, IPost } from './post.d'
import Head from 'next/head'

const Post: NextPage<IPost> = ({
  title,
  image,
  date,
  author,
  category,
  content,
}) => {
  return (
    <>
      <Head>
        <title>{title} | Kross Creative Template {'>'} Blog</title>
      </Head>
      <PageTitle align="center">Blogs</PageTitle>
      <a id="post"></a>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="font-tertiary mb-3">{title}</h3>
              <p className="font-secondary mb-5">
                Published on {date} by <span className="text-primary">{author}</span> on <span>{category}</span>
              </p>
              <div className="content">
                <Image
                  src={image}
                  alt="post-thumb"
                  className="img-fluid rounded float-left mr-5 mb-4"
                  width={402}
                  height={474}
                  layout="raw"
                />
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Post
