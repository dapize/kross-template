import React, { FC } from 'react'
import { ISubmit } from './Submit.d';

export const Submit: FC<ISubmit> = ({children, loading = false}) => {
  return (
    <button
      className="btn btn-primary w-100"
      disabled={loading}
    >
      {
        loading
          ?
            (
              <span
                className="spinner-border spinner-border-md"
                role="status"
                aria-hidden="true">
              </span>
            )
          : children
      }
    </button>
  )
}
