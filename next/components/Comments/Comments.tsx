import React, { FC, useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'

import { Spinner } from '@components/Spinner'
import { comments } from '@services/comments'
import useInView from '@hooks/useInView';

import { Comment } from './Comment'
import { IComments, IComment } from './Comments.d'
import { FieldValues } from 'react-hook-form';
import { FormComment } from '@components/FormComment';

export const Comments: FC<IComments> = ({ postId }) => {
  const [items, setItems] = useState<IComment[]>([]);
  const [commentsTotal, setCommentsTotal] = useState<string | number>('loading...');
  const { refetch } = useQuery('comments', () => comments(postId), { enabled: false, onSuccess: ( { data } ) => {
    setItems(data.list)
  }});
  const ref = useRef(null);
  const inView = useInView(ref);

  const handleCommentAdded = ( dataForm: FieldValues ) => {
    setItems( ( comments: IComment[] ) => {
      return [
        ...comments,
        dataForm as IComment
      ]
    })
  }

  useEffect(() => {
    const nComments = items.length;
    if ( nComments ) {
      setCommentsTotal( nComments )
    }
  }, [ items ]);

  useEffect(() => {
    if ( inView ) {
      refetch();
    }
  }, [ inView, refetch ])

  return (
    <section ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="font-weight-bold mb-3">Comments {commentsTotal}</h4>
            {
              items.length
                ? (
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
                )
                : (
                  <div className="my-3">
                    <Spinner/>
                  </div>
                )
            }
            <FormComment onCommentAdded={handleCommentAdded}/>
          </div>
        </div>
      </div>
    </section>
  )
}
