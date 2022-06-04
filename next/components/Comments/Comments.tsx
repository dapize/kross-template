import React, { FC, useEffect, useState } from 'react'
import { Comment } from './Comment'
import { IComments, IComment } from './Comments.d'

export const Comments: FC<IComments> = ({ list }) => {
  const [items, setItems] = useState<IComment[]>(list)
  const [commentsTotal, setCommentsTotal] = useState(list.length)

  useEffect(() => {
    setCommentsTotal(items.length)
  }, [ items ])

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="font-weight-bold mb-3">Comments {commentsTotal}</h4>
            <div className="bg-gray p-5 mb-4">
              {
                items.map((item: IComment, index: number) => (
                  <Comment
                    key={`${item.author}-${index}`}
                    id={item.id}
                    avatar={item.avatar}
                    author={item.author}
                    date={item.date}
                    last={commentsTotal !== (index + 1)}
                  >
                    {item.content}
                  </Comment>
                ))
              }
            </div>
            {/* <!-- post form --> */}
          </div>
        </div>
      </div>
    </section>
  )
}
