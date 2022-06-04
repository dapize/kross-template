import React, { FC, FormEvent, useState } from 'react'
import { IFilter, Props } from './Filters.d'

export const Filters: FC<Props> = ({ list, onChange }) => {
  const [items, setItems] = useState<IFilter[]>(list.map((item: IFilter) => ({ ...item, active: item.active === undefined ? false : true})))

  const onChangeHandler = (event: FormEvent<HTMLInputElement> ) => {
    const itemActive = event.currentTarget.value;
    onChange( itemActive );
    setItems(items.map((item: IFilter) => ({ ...item, active: item.value === itemActive})))
  }

  return (
    <>
      <div className="row mb-5">
        <div className="col-12">
          <div className="btn-group btn-group-toggle justify-content-center d-flex" data-toggle="buttons">
            {
              items.map( ( filter: IFilter, index: number ) => (
                <label className={`btn btn-sm btn-primary ${filter.active && 'active'}`} key={`${filter.title}-${index}`}>
                  <input type="radio" name="shuffle-filter" value={filter.value} checked={filter.active} onChange={onChangeHandler} /> { filter.title }
                </label>
              ))
            }
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 479px) {
          .btn-primary {
            font-size:  13px;
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}
      </style>
    </>
  )
}
