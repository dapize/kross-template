import React from 'react'

import { IExperience } from './Experience.d';
import experience1 from '@assets/images/experience/icon-1.png';
import experience2 from '@assets/images/experience/icon-2.png';
import experience3 from '@assets/images/experience/icon-3.png';
import Image from 'next/image';

export const Experience = () => {
  const experiences: IExperience[] = [
    {
      period: 'Jan 2007 - Feb 2009',
      title: 'Junior UX Designer',
      company: 'WEBEX',
      icon: experience1
    },
    {
      period: 'Mar 2009 - Aug 2014',
      title: 'UX & UI Designer',
      company: 'AUGMEDIX',
      icon: experience2
    },
    {
      period: 'Sep 2014 - Present',
      title: 'Senior UI Designer',
      company: 'THEMEFISHER',
      icon: experience3
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Experience</h2>
          </div>
          {
            experiences.map( (experience: IExperience, index: number) => (
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
