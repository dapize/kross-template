import React, { FC, useEffect, useRef } from 'react'
import Shuffle from 'shufflejs';

import { IFilter } from './Filters.d'
import { Filters } from './Filters'
import { IPortfolio, IProject } from './Portfolio.d'

export const Portfolio: FC<IPortfolio> = ({ title = true, filters = false, projects }) => {
  const shuffleWrapper = useRef<null | HTMLDivElement>(null);
  const shuffleInstance = useRef<null | Shuffle>(null);

  const onChangeFilter = ( value: string ) => {
    (shuffleInstance.current as Shuffle).filter(value);
  }

  useEffect(() => {
    if (shuffleWrapper.current) {
      setTimeout(() => {
        shuffleInstance.current = new Shuffle(shuffleWrapper.current as HTMLDivElement, {
          itemSelector: '.shuffle-item',
          buffer: 1
        });
      }, 500)
    }
  }, [])

  return (
    <section className="section">
      <div className="container">
        {
          title && (
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">Portfolio</h2>
              </div>
            </div>
          )
        }
        { filters && <Filters list={ filters as IFilter[] } onChange={onChangeFilter}/> }

        <div className="row shuffle-wrapper" ref={shuffleWrapper}>
          {
            projects.map(( project: IProject, index: number) => (
              <div className="col-lg-4 col-6 mb-4 shuffle-item" key={`${project.image}-${index}`} data-groups={project.groups && `["${project.groups.join('","')}"]`}>
                <div className="position-relative rounded hover-wrapper">
                  <img src={project.image} alt="portfolio-image" className="img-fluid rounded w-100"/>
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a className="btn btn-light btn-sm" href="#!">view project</a>
                    </div>
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
