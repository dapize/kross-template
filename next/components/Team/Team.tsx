import Image from 'next/image'
import React, { FC } from 'react'

import Styles from './Team.module.css';
import { IMember, Props } from './Team.d';

export const Team: FC<Props> = ({ members }) => {
  return (
    <section className={`section bg-cover ${Styles.bgSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">My Team</h2>
          </div>
          {
            members.map( (member: IMember, index: number) => (
              <div className="col-md-4 col-sm-6 mb-4 mb-md-0" key={`${member.name}-${index}`}>
                <div className="card text-center">
                  <Image src={member.image} className="card-img-top" layout="raw" width={368} height={376} />
                  <div className="card-body">
                    <h4 className="card-title">{member.name}</h4>
                    <p className="text-light font-secondary">{member.role}</p>
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
