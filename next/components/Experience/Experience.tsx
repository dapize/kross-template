import React, { FC } from 'react'

import { IExperience, Props } from './Experience.d';

import Image from 'next/image';

export const Experience: FC<Props> = ({ list }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Experience</h2>
          </div>
          {
            list.map( (experience: IExperience, index: number) => (
              <div className="col-lg-3 col-md-4 text-center" key={`${experience.title}-${index}`}>
                <Image src={experience.icon} alt={experience.title} layout="raw" width={110} height={118}/>
                <p className="mb-0">{experience.period}</p>
                <h4>{experience.title}</h4>
                <h6 className="text-light">{experience.company}</h6>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
