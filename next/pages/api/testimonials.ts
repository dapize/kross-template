import type { NextApiRequest, NextApiResponse } from 'next'

import { ITestimonial } from '@components/Testimonials';

type Data = {
  list: ITestimonial[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    list: [
      {
        author: 'Jesica Gomez',
        role: 'CEO, Funder',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        avatar: '/assets/images/testimonial/client-1.png'
      },
      {
        author: 'Jesica Gomez',
        role: 'CEO, Funder',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        avatar: '/assets/images/testimonial/client-1.png'
      },
      {
        author: 'Jesica Gomez',
        role: 'CEO, Funder',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        avatar: '/assets/images/testimonial/client-1.png'
      }
    ]
  })
}
