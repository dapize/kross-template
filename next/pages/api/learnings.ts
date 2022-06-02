import type { NextApiRequest, NextApiResponse } from 'next'

import { ILearning } from '@components/Education';

type Data = {
  list: ILearning[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    list: [
      {
        title: 'Marters in UX Design',
        year: 2006,
        institution: 'Masassusets Institute of Technology'
      },
      {
        title: 'Honours in Fine Arts',
        year: 2004,
        institution: 'Harvard University'
      },
      {
        title: 'Higher Secondary Certificat',
        year: 2000,
        institution: 'Cardiff School'
      },
      {
        title: 'Secondary School Certificate',
        year: 1998,
        institution: 'Cardiff School'
      }
    ]
  })
}
