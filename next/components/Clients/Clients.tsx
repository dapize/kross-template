import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay';

import { Props, ILogo } from './Clients.d';


const settings = {
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 5
    }
  },
  loop: true,
  autoplay: true
};

const modules = [Autoplay];

export const Clients: FC<Props> = ({ title = false, logos }) => {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <section className={`section ${title ? 'bg-light' : 'pb-0'}`}>
      <div className="container">
        {
          title && (
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="section-title">My Clients</h2>
              </div>
            </div>
          )
        }
        <div className="row">
          <div className="col-12">
            <div className="client-logo-slider d-flex align-items-center">
              {
                !isSSR && (
                  <Swiper { ...settings } modules={ modules }>
                    {
                      logos.map((logo: ILogo, index: number) => (
                        <SwiperSlide
                          key={`${logo.image}-${index}`}
                          className="text-center d-block outline-0 p-4"
                        >
                          <Image className="d-unset img-fluid" src={logo.image} alt="client-logo" width={logo.width} height={logo.height} layout="raw"/>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
