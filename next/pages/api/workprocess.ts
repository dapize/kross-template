import type { NextApiRequest, NextApiResponse } from 'next'

import { IProcess } from '@components/WorkProcess';

type Data = {
  list: IProcess[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    list: [
      {
        title: 'Research and Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: {
          image: '/assets/images/icons/plan.png',
          width: 57,
          height: 59
        }
      },
      {
        title: 'Design and Develop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: {
          image: '/assets/images/icons/design.png',
          width: 49,
          height: 49
        }
      },
      {
        title: 'Deliver',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: {
          image: '/assets/images/icons/print.png',
          width: 60,
          height: 43
        }
      }
    ]
  })
}
