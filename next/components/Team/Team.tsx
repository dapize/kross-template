import Image from 'next/image'
import React from 'react'

import Styles from './Team.module.css';
import { IMember } from './Team.d';
import Member1 from '@assets/images/team/member-1.png';
import Member2 from '@assets/images/team/member-2.png';
import Member3 from '@assets/images/team/member-3.png';

export const Team = () => {
  const members: IMember[] = [
    { name: 'Jack Schenziwe', role: 'Project Manager', image: Member1 },
    { name: 'Jack Schenziwe', role: 'Project Manager', image: Member2 },
    { name: 'Jack Schenziwe', role: 'Project Manager', image: Member3 }
  ]

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
