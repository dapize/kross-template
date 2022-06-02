import React, { FC } from 'react'
import Image from 'next/image';

import { IProcess, Props } from './WorkProcess.d';

export const WorkProcess: FC<Props> = ({ list }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Work Process</h2>
          </div>
          {
            list.map( ( process: IProcess, index: number ) => (
              <div className="col-lg-3 col-md-4 text-center hover-shadow pt-3" key={`${process.title}-${index}`}>
                <Image src={process.icon.image} className="mb-4" alt="icon" layout="raw" width={process.icon.width} height={process.icon.height}/>
                <h4 className="mb-4">{process.title}</h4>
                <p>{process.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
