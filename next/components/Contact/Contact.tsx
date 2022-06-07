import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { joiResolver } from '@hookform/resolvers/joi';

import Styles from './Contact.module.css';
import { schema } from './Contact.schema';

import { Submit } from '@components/Submit';
import { contact } from '@services/contact';


export const Contact = () => {
  const { isLoading, mutate } = useMutation( contact, {
    onSuccess: ( { data } ) => {
      toast.success(data.message);
    },
    onError: () => {
      toast.error('Was not possible send the contact');
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    resolver: joiResolver(schema),
  });

  const onSubmit = ( formData: FieldValues ) => {
    mutate( formData );
    reset();
  }

  return (
    <section className={`section section-on-footer ${Styles.section}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">Contact Info</h2>
          </div>
          <div className="col-lg-8 mx-auto">
            <div className="bg-white rounded p-5 shadow-down">
              <h4 className="mb-80 text-center">Contact Form</h4>
              <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6 mb-4">
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    disabled={isLoading}
                    className={`form-control px-0 ${errors.name && 'is-invalid'}`}
                    { ...register('name', { required: true }) }
                  />
                  { errors.name && <div className="invalid-feedback">{ errors.name.message }</div> }
                </div>
                <div className="col-md-6 mb-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    disabled={isLoading}
                    className={`form-control px-0 ${errors.email && 'is-invalid'}`}
                    { ...register('email', { required: true }) }
                  />
                  { errors.email && <div className="invalid-feedback">{ errors.email.message }</div> }
                </div>
                <div className="col-12 mb-4">
                  <textarea
                    id="message"
                    placeholder="Type Message Here"
                    disabled={isLoading}
                    className={`form-control px-0 ${errors.message && 'is-invalid'}`}
                    { ...register('message', { required: true }) }
                  />
                  { errors.message && <div className="invalid-feedback">{ errors.message.message }</div> }
                </div>
                <div className="col-lg-6 col-10 mx-auto">
                  <Submit loading={isLoading}>send</Submit>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
