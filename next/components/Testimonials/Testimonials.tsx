import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import { ITestimonials, ITestimonial } from './Testimonials.d';

export const Testimonials: FC<ITestimonials> = ({ list }) => {
  const [isSSR, setIsSSR] = useState<boolean>(true);
  const modules = [Pagination, A11y];

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      <section className="section bg-primary position-relative testimonial-bg-shapes">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title text-white mb-5">Testimonials</h2>
            </div>
            <div className="col-lg-10 mx-auto">
              {
                !isSSR && (
                  <Swiper
                    modules={ modules }
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop
                  >
                    {
                      list.map((testimonial: ITestimonial, index: number) => (
                        <SwiperSlide
                          key={`${testimonial.author}-${index}`}
                          className="text-center d-block outline-0 p-4"
                        >
                          <i className="ti-quote-right text-white icon mb-4 d-inline-block" />
                          <p className="text-white mb-4" dangerouslySetInnerHTML={{ __html: testimonial.content }}></p>
                          <Image src={ testimonial.avatar } className="img-fluid rounded-circle mb-4 d-inline-block" alt="client-image" layout="raw" width={106} height={106}/>
                          <h4 className="text-white">{ testimonial.author }</h4>
                          <h6 className="text-light mb-4">{ testimonial.role }</h6>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                )
              }
            </div>
          </div>
        </div>
        <Image src="/assets/images/backgrounds/map.png" alt="map" className="img-fluid bg-map" layout="raw" width={1088} height={601}/>
        <Image src="/assets/images/illustrations/dots-group-v.png" alt="bg-shape" className="img-fluid bg-shape-1" layout="raw" width={74} height={123}/>
        <Image src="/assets/images/illustrations/leaf-orange.png" alt="bg-shape" className="img-fluid bg-shape-2" layout="raw" width={72} height={93}/>
        <Image src="/assets/images/illustrations/dots-group-sm.png" alt="bg-shape" className="img-fluid bg-shape-3" layout="raw" width={74} height={54}/>
        <Image src="/assets/images/illustrations/leaf-pink-round.png" alt="bg-shape" className="img-fluid bg-shape-4" layout="raw" width={84} height={68}/>
        <Image src="/assets/images/illustrations/leaf-cyan.png" alt="bg-shape" className="img-fluid bg-shape-5" layout="raw" width={169} height={96}/>
      </section>
      <style global jsx>{`
        .swiper-pagination {
          text-align: center;
          padding-left: 0;
        }
        .swiper-pagination-bullet {
          display: inline-block;
          margin: 2px;
          height: 6px;
          width: 12px;
          background: rgba(255, 255, 255, 0.5);
          color: transparent;
          border-radius: 10px;
          overflow: hidden;
          transition: 0.2s ease;
          border: 0;
        }

        .swiper-pagination-bullet.swiper-pagination-bullet-active {
          background: #fff;
          width: 25px;
        }
      `}
      </style>
    </>
  )
}
