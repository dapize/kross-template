import React, { useRef, useState, MouseEvent, useEffect } from 'react'
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

import Styles from './Hero.module.css';
import { IPositions } from './Hero.d';

const mouseParallax = (el: HTMLDivElement, left: number, top: number, mouseX: number, mouseY: number, speed: number) => {
  const parentObj = el.parentNode as HTMLElement;
  const containerWidth = parseInt(parentObj.offsetWidth.toString());
  const containerHeight = parseInt(parentObj.offsetHeight.toString());
  el.style.left = left - (((mouseX - (parseInt(el.offsetWidth.toString()) / 2 + left)) / containerWidth) * speed) + 'px';
  el.style.top = top - (((mouseY - (parseInt(el.offsetHeight.toString()) / 2 + top)) / containerHeight) * speed) + 'px';
};

export const Hero = () => {
  const section = useRef<null | HTMLElement>(null)
  const l2 = useRef<null | HTMLDivElement>(null);
  const l3 = useRef<null | HTMLDivElement>(null);
  const l4 = useRef<null | HTMLDivElement>(null);
  const l5 = useRef<null | HTMLDivElement>(null);
  const l6 = useRef<null | HTMLDivElement>(null);
  const l7 = useRef<null | HTMLDivElement>(null);
  const l8 = useRef<null | HTMLDivElement>(null);
  const l9 = useRef<null | HTMLDivElement>(null);
  const [positions, setPositions] = useState<IPositions | null>(null)

  const onMouseMoveSection = (e: MouseEvent<HTMLElement>) => {
    if ( window.matchMedia("(pointer: coarse)").matches ) return;
    const event = e || window.event;
    const x = event.clientX - (section.current as HTMLElement).offsetLeft;
    const y = event.clientY - (section.current as HTMLElement).offsetTop;
    const pos = positions as IPositions;
    mouseParallax(l2.current as HTMLDivElement, pos.c2left, pos.c2top, x, y, 25);
    mouseParallax(l3.current as HTMLDivElement, pos.c3left, pos.c3top, x, y, 20);
    mouseParallax(l4.current as HTMLDivElement, pos.c4left, pos.c4top, x, y, 35);
    mouseParallax(l5.current as HTMLDivElement, pos.c5left, pos.c5top, x, y, 30);
    mouseParallax(l6.current as HTMLDivElement, pos.c6left, pos.c6top, x, y, 45);
    mouseParallax(l7.current as HTMLDivElement, pos.c7left, pos.c7top, x, y, 30);
    mouseParallax(l8.current as HTMLDivElement, pos.c8left, pos.c8top, x, y, 25);
    mouseParallax(l9.current as HTMLDivElement, pos.c9left, pos.c9top, x, y, 40);
  };

  useEffect(() => {
    if ( !window.matchMedia("(pointer: coarse)").matches ) {
      const getPositions = {
        c2left: (l2.current as HTMLDivElement).offsetLeft,
        c2top: (l2.current as HTMLDivElement).offsetTop,
        c3left: (l3.current as HTMLDivElement).offsetLeft,
        c3top: (l3.current as HTMLDivElement).offsetTop,
        c4left: (l4.current as HTMLDivElement).offsetLeft,
        c4top: (l4.current as HTMLDivElement).offsetTop,
        c5left: (l5.current as HTMLDivElement).offsetLeft,
        c5top: (l5.current as HTMLDivElement).offsetTop,
        c6left: (l6.current as HTMLDivElement).offsetLeft,
        c6top: (l6.current as HTMLDivElement).offsetTop,
        c7left: (l7.current as HTMLDivElement).offsetLeft,
        c7top: (l7.current as HTMLDivElement).offsetTop,
        c8left: (l8.current as HTMLDivElement).offsetLeft,
        c8top: (l8.current as HTMLDivElement).offsetTop,
        c9left: (l9.current as HTMLDivElement).offsetLeft,
        c9top: (l9.current as HTMLDivElement).offsetTop
      };
      setPositions(getPositions);
    }
  }, [])


  return (
    <section
      className={`hero-area bg-primary ${Styles.section}`}
      id="parallax"
      ref={section}
      onMouseMove={onMouseMoveSection}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <h1 className="text-white font-tertiary">Hi! I’m <br /> Christoher <br /> UX designer</h1>
          </div>
        </div>
      </div>
      <div className="layer-bg w-100">
        <Image src={lefBg} className="img-fluid w-100" alt="bg-shape" width={1600} height={864} layout="raw"/>
      </div>
      <div className="layer" id="l2" ref={l2}>
        <Image src={DotsCyan} alt="bg-shape" width={165} height={9} layout="raw"/>
      </div>
      <div className="layer" id="l3" ref={l3}>
        <Image src={LeafOrange} alt="bg-shape" width={72} height={93} layout="raw"/>
      </div>
      <div className="layer" id="l4" ref={l4}>
        <Image src={DotsOrange} alt="bg-shape" width={125} height={9} layout="raw"/>
      </div>
      <div className="layer" id="l5" ref={l5}>
        <Image src={LeafYellow} alt="bg-shape" width={346} height={285} layout="raw"/>
      </div>
      <div className="layer" id="l6" ref={l6}>
        <Image src={LeafCyan} alt="bg-shape" width={169} height={96} layout="raw"/>
      </div>
      <div className="layer" id="l7" ref={l7}>
        <Image src={DotsGroupOrange} alt="bg-shape" width={74} height={54} layout="raw"/>
      </div>
      <div className="layer" id="l8" ref={l8}>
        <Image src={LeafPinkRound} alt="bg-shape" width={84} height={68} layout="raw"/>
      </div>
      <div className="layer" id="l9" ref={l9}>
        <Image src={LeafCyan2} alt="bg-shape" width={161} height={120} layout="raw"/>
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
