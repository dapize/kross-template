import type { NextApiRequest, NextApiResponse } from 'next'

import { IPost } from '@components/Posts';

type Data = {
  list: IPost[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    list: [
      {
        image: '/assets/images/blog/post-5.jpg',
        title: 'Amazon increase income 1.5 Million',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        url: 'single'
      },
      {
        image: '/assets/images/blog/post-2.jpg',
        title: 'Amazon increase income 1.5 Million',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        url: 'single'
      },
      {
        image: '/assets/images/blog/post-3.jpg',
        title: 'Amazon increase income 1.5 Million',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        url: 'single'
      },
      {
        image: '/assets/images/blog/post-4.jpg',
        title: 'Amazon increase income 1.5 Million',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        url: 'single'
      },
      {
        image: '/assets/images/blog/post-5.jpg',
        title: 'Amazon increase income 1.5 Million',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        url: 'single'
      },
      {
        image: '/assets/images/blog/post-2.jpg',
        title: 'Amazon increase income 1.5 Million',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        url: 'single'
      }
    ]
  })
}
