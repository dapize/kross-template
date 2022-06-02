import React, { FC } from 'react'
import { IService, IServices } from './Services.d'

export const Services: FC<IServices> = ({ list }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">Services</h2>
          </div>
          {
            list.map((service: IService, index: number ) => (
              <div className="col-md-4 mb-4 mb-md-0" key={`${service.title}-${index}`}>
                <div className={`card hover-shadow shadow ${service.active && 'active-bg-primary'}`}>
                  <div className="card-body text-center px-4 py-5">
                    <i className={`icon mb-5 d-inline-block ${service.classIcon}`}/>
                    <h4 className="mb-4">{service.title}</h4>
                    <p>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
