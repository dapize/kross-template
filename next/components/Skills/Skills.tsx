import React, { FC } from 'react'

import { ISkill, ISkillsProps } from './Skills.d';

export const Skills: FC<ISkillsProps> = ({ list }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Skills</h2>
          </div>
          {
            list.map((skill: ISkill) => (
              <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0" key={skill.color}>
                <div className="card shadow text-center">
                  <div className="position-relative rounded-top progress-wrapper" style={{ backgroundColor: skill.color }}>
                    <div className="wave" style={{ bottom: `${skill.percentage}%` }} />
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">{ skill.title } ({ skill.percentage}%)</h4>
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
