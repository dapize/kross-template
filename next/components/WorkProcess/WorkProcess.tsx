import React from 'react'
import Image from 'next/image';

import Plan from '@assets/images/icons/plan.png';
import Design from '@assets/images/icons/design.png';
import Print from '@assets/images/icons/print.png';

import { IProcess } from './WorkProcess.d';

export const WorkProcess = () => {

  const processes: IProcess[] = [
    {
      title: 'Research and Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: {
        image: Plan,
        width: 57,
        height: 49
      }
    },
    {
      title: 'Design and Develop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: {
        image: Design,
        width: 49,
        height: 49
      }
    },
    {
      title: 'Deliver',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: {
        image: Print,
        width: 60,
        height: 43
      }
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Work Process</h2>
          </div>
          {
            processes.map( ( process: IProcess, index: number ) => (
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
