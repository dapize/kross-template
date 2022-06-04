import Image from 'next/image'
import React, { FC } from 'react'
import { IPost } from './Post.d'

export const Post: FC<IPost> = ({
  title,
  image,
  date,
  author,
  category,
  content,
}) => {
  return (
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
  )
}
