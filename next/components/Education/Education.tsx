import Image from 'next/image';
import React, { FC } from 'react'

import { IEducation, ILearning } from './Education.d';
import EducationBg from '@assets/images/backgrounds/education-bg.png'

export const Education: FC<IEducation> = ({ list }) => {
  return (
    <section className="section position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Education</h2>
          </div>
          {
            list.map((learning: ILearning, index: number ) => (
              <div className="col-lg-6 col-md-6 mb-80" key={`${learning.title}-${index}`}>
                <div className="d-flex">
                  <div className="mr-lg-5 mr-3">
                    <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                  </div>
                  <div>
                    <p className="text-dark mb-1">{ learning.year }</p>
                    <h4>{ learning.title }</h4>
                    <p className="mb-0 text-light">{ learning.institution }</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Image src={EducationBg} className="img-fluid edu-bg-image w-100" alt="bg-image" layout="raw" width={1595} height={1199}/>
    </section>
  )
}
