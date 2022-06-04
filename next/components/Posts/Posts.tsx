import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { IPosts, IPost } from './Posts.d'

export const Posts: FC<IPosts> = ({ list }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {
            list.map((post: IPost, index: number ) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={`${post.title}-${index}`}>
                <article className="card shadow">
                  <Image src={post.image} className="rounded card-img-top" alt="post-thumb" width={371} height={270} layout="raw"/>
                  <div className="card-body">
                    <h4 className="card-title">
                      <Link href={`/blog/${post.url}#post`}>
                        <a className="text-dark">
                          { post.title }
                        </a>
                      </Link>
                    </h4>
                    <p className="cars-text">{ post.description }</p>
                    <Link href={`/blog/${post.url}#post`}>
                      <a className="btn btn-xs btn-primary">Read More</a>
                    </Link>
                  </div>
                </article>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
