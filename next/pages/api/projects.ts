import type { NextApiRequest, NextApiResponse } from 'next'
import { IProject } from '@components/Portfolio';

type Data = {
  list: IProject[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    list: [
      { image: '/assets/images/portfolio/item-1.png' },
      { image: '/assets/images/portfolio/item-2.png' },
      { image: '/assets/images/portfolio/item-3.png' },
      { image: '/assets/images/portfolio/item-4.png' },
      { image: '/assets/images/portfolio/item-5.png' }
    ]
  })
}
