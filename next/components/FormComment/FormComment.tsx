import React, { FC } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { joiResolver } from '@hookform/resolvers/joi';
import md5 from 'md5';
import { format } from 'date-fns'

import { Submit } from '@components/Submit';
import { comment } from '@services/comment';
import { schema } from './FormComment.schema';
import { ICommentRaw, IFormComment } from './FormComment.d';

export const FormComment: FC<IFormComment> = ({ onCommentAdded }) => {
  const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    resolver: joiResolver(schema),
  })

  const { isLoading, mutate, isSuccess } = useMutation( comment, {
    onSuccess: ( { data } ) => {
      toast.success(data.message);

      const { firstName, lastName, email, comment } = getValues() as ICommentRaw;
      onCommentAdded({
        id: data.id,
        avatar: 'https://www.gravatar.com/avatar/' + md5(email),
        author: firstName + ' ' + lastName,
        date: format(new Date(), "i MMM y 'At' h:m aaa"),
        content: comment,
      });

      reset();
    },
    onError: () => {
      toast.error('Was not possible add the comment.');
    }
  })

  const handleOnSubmit = ( formData: FieldValues ) => {
    mutate( formData );
  }

  return (
    <div className="mt-5">
      <h4 className="font-weight-bold mb-3 border-bottom pb-3">Leave a Comment</h4>
      <form action="#" className="row" onSubmit={handleSubmit(handleOnSubmit)}>

        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="text"
              placeholder="First Name"
              id="fname"
              className={`form-control ${errors.firstName && 'is-invalid'}`}
              { ...register('firstName', { required: true }) }
            />
            { errors.firstName && <div className="invalid-feedback">{ errors.firstName.message }</div> }
          </div>

          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${errors.lastName && 'is-invalid'}`}
              placeholder="Last Name"
              id="lname"
              { ...register('lastName', { required: true }) }
            />
            { errors.lastName && <div className="invalid-feedback">{ errors.lastName.message }</div> }
          </div>

          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${errors.email && 'is-invalid'}`}
              placeholder="Email *"
              id="mail"
              { ...register('email', { required: true }) }
            />
            { errors.email && <div className="invalid-feedback">{ errors.email.message }</div> }
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-4">
            <textarea
              id="comment"
              placeholder="Message"
              className={`form-control ${errors.comment && 'is-invalid'}`}
              { ...register('comment', { required: true }) }
            ></textarea>
            { errors.comment && <div className="invalid-feedback">{ errors.comment.message }</div> }
          </div>
          <Submit loading={isLoading}>Send Message</Submit>
        </div>
      </form>
    </div>
  )
}
