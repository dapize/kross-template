import type { NextApiRequest, NextApiResponse } from 'next'

import { IService } from '@components/Services';

type Data = {
  list: IService[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    list: [
      {
        title: 'UI Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        classIcon: 'ti-palette'
      },
      {
        title: 'UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        classIcon: 'ti-vector',
        active: true
      },
      {
        title: 'Interaction Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        classIcon: 'ti-panel'
      }
    ]
  })
}
