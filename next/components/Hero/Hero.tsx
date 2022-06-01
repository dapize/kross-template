import React, { useRef } from 'react'
import Image from 'next/image';

import lefBg from '@assets/images/illustrations/leaf-bg.png';
import DotsCyan from '@assets/images/illustrations/dots-cyan.png';
import LeafOrange from '@assets/images/illustrations/leaf-orange.png';
import DotsOrange from '@assets/images/illustrations/dots-orange.png'
import LeafYellow from '@assets/images/illustrations/leaf-yellow.png'
import LeafCyan from '@assets/images/illustrations/leaf-cyan.png'
import DotsGroupOrange from '@assets/images/illustrations/dots-group-orange.png'
import LeafPinkRound from '@assets/images/illustrations/leaf-pink-round.png'
import LeafCyan2 from '@assets/images/illustrations/leaf-cyan-2.png'

export const Hero = () => {
  const section = useRef<null | HTMLElement>(null)

  return (
    <section className="hero-area bg-primary" id="parallax" ref={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <h1 className="text-white font-tertiary">Hi! I’m <br /> Christoher <br /> UX designer</h1>
          </div>
        </div>
      </div>
      <div className="layer-bg w-100">
        <img src={lefBg.src} className="img-fluid w-100" alt="bg-shape"/>
      </div>
      <div className="layer" id="l2">
        <Image src={DotsCyan} alt="bg-shape" width={165} height={9}/>
      </div>
      <div className="layer" id="l3">
        <Image src={LeafOrange} alt="bg-shape" width={72} height={93}/>
      </div>
      <div className="layer" id="l4">
        <Image src={DotsOrange} alt="bg-shape" width={125} height={9}/>
      </div>
      <div className="layer" id="l5">
        <Image src={LeafYellow} alt="bg-shape" width={346} height={285}/>
      </div>
      <div className="layer" id="l6">
        <Image src={LeafCyan} alt="bg-shape" width={169} height={96}/>
      </div>
      <div className="layer" id="l7">
        <Image src={DotsGroupOrange} alt="bg-shape" width={74} height={54}/>
      </div>
      <div className="layer" id="l8">
        <Image src={LeafPinkRound} alt="bg-shape" width={84} height={68}/>
      </div>
      <div className="layer" id="l9">
        <Image src={LeafCyan2} alt="bg-shape" width={161} height={120}/>
      </div>
      <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
        <li className="mb-3">
          <a className="text-white" href="https://themefisher.com/"><i className="ti-facebook" /></a>
        </li>
        <li className="mb-3">
          <a className="text-white" href="https://themefisher.com/"><i className="ti-instagram" /></a>
        </li>
        <li className="mb-3">
          <a className="text-white" href="https://themefisher.com/"><i className="ti-dribbble" /></a>
        </li>
        <li className="mb-3">
          <a className="text-white" href="https://themefisher.com/"><i className="ti-twitter" /></a>
        </li>
      </ul>
    </section>
  )
}
