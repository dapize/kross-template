import React, { FC, FormEvent } from 'react'
import { IFilter, Props } from './Filters.d'

export const Filters: FC<Props> = ({ list, onChange }) => {
  const onChangeHandler = (event: FormEvent<HTMLInputElement> ) => {
    onChange( event.currentTarget.value )
  }

  return (
    <div className="row mb-5">
      <div className="col-12">
        <div className="btn-group btn-group-toggle justify-content-center d-flex" data-toggle="buttons">
          {
            list.map( ( filter: IFilter, index: number ) => (
              <label className={`btn btn-sm btn-primary ${filter.active && 'active'}`} key={`${filter.title}-${index}`}>
                <input type="radio" name="shuffle-filter" value={filter.value} checked={filter.active} onChange={onChangeHandler} /> { filter.title }
              </label>
            ))
          }
        </div>
      </div>
    </div>
  )
}
