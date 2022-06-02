import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay';

import { IClients, ILogo } from './Clients.d';

import logo1 from '@assets/images/clients-logo/client-logo-1.png';
import logo2 from '@assets/images/clients-logo/client-logo-2.png';
import logo3 from '@assets/images/clients-logo/client-logo-3.png';
import logo4 from '@assets/images/clients-logo/client-logo-4.png';
import logo5 from '@assets/images/clients-logo/client-logo-5.png';

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

export const Clients: FC<IClients> = ({ title = false }) => {
  const logos: ILogo[] = [
    { image: logo1, width: 139, height: 25 },
    { image: logo2, width: 144, height: 36 },
    { image: logo3, width: 113, height: 35 },
    { image: logo4, width: 118, height: 30 },
    { image: logo5, width: 121, height: 43 },
    { image: logo1, width: 139, height: 25 },
    { image: logo2, width: 144, height: 36 },
    { image: logo3, width: 113, height: 35 },
    { image: logo4, width: 118, height: 30 },
    { image: logo5, width: 121, height: 43 },
  ];
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
                          key={`${logo.image.src}-${index}`}
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
