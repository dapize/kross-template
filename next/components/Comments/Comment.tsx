import Image from 'next/image'
import React, { FC } from 'react'
import { IComment } from './Comment.d'

export const Comment: FC<IComment> = ({ avatar, author, date, last, children }) => {
  return (
    <div className={`media py-4 ${last && 'border-bottom'}`}>
      <Image
        src={avatar}
        className="img-fluid align-self-start rounded-circle mr-3"
        alt="avatar"
        width={61}
        height={61}
        layout="raw"
      />
      <div className="media-body">
        <h5 className="mt-0">{author}</h5>
        <p>{date}</p>
        <p>{children}</p>
      </div>
    </div>
  )
}
