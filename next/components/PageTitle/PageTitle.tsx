import React, { FC } from 'react'
import Image from 'next/image'

import { IPageTitle } from './PageTitle.d';
import Styles from './PageTitle.module.css';

export const PageTitle: FC<IPageTitle> = ({ children, align = 'left' }) => {
  return (
    <section className={`bg-primary position-relative ${align === 'left' ? 'page-title-alt' : 'page-title'} ${Styles.section}`}>
      <div className="container">
        <div className="row">
          <div className={`col-12 ${align === 'center' && 'text-center'}`}>
            <h1 className="text-white font-tertiary">{children}</h1>
          </div>
        </div>
      </div>
      {
        align === 'left'
        ? (
            <>
              <Image src="/assets/images/illustrations/leaf-bg-top.png" alt="illustrations" className="bg-shape-1 w-100" width={1600} height={517} layout="raw"/>
              <Image src="/assets/images/illustrations/dots-group-sm.png" alt="illustrations" className="bg-shape-2" width={74} height={54} layout="raw"/>
              <Image src="/assets/images/illustrations/leaf-yellow.png" alt="illustrations" className="bg-shape-3" width={346} height={285} layout="raw"/>
              <Image src="/assets/images/illustrations/leaf-orange.png" alt="illustrations" className="bg-shape-4" width={72} height={93} layout="raw"/>
              <Image src="/assets/images/illustrations/dots-group-cyan.png" alt="illustrations" className="bg-shape-5" width={74} height={54} layout="raw"/>
              <Image src="/assets/images/illustrations/leaf-cyan-lg.png" alt="illustrations" className="bg-shape-6" width={464} height={291} layout="raw"/>
            </>
          )
        : (
          <>
            <Image src="/assets/images/illustrations/page-title.png" alt="illustrations" className="bg-shape-1 w-100" width={1600} height={502} layout="raw"/>
            <Image src="/assets/images/illustrations/leaf-pink-round.png" alt="illustrations" className="bg-shape-2" width={84} height={68} layout="raw"/>
            <Image src="/assets/images/illustrations/dots-cyan.png" alt="illustrations" className="bg-shape-3" width={165} height={9} layout="raw"/>
            <Image src="/assets/images/illustrations/leaf-orange.png" alt="illustrations" className="bg-shape-4" width={72} height={93} layout="raw"/>
            <Image src="/assets/images/illustrations/leaf-yellow.png" alt="illustrations" className="bg-shape-5" width={346} height={285} layout="raw"/>
            <Image src="/assets/images/illustrations/dots-group-cyan.png" alt="illustrations" className="bg-shape-6" width={74} height={54} layout="raw"/>
            <Image src="/assets/images/illustrations/leaf-cyan-lg.png" alt="illustrations" className="bg-shape-7" width={464} height={291} layout="raw"/>
          </>
        )
      }
    </section>
  )
}
