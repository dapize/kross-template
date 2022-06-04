import type { NextApiRequest, NextApiResponse } from 'next'
import { IFilter, IProject } from '@components/Portfolio';

type Data = {
  projects: IProject[];
  filters: IFilter[];
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    projects: [
      { image: '/assets/images/portfolio/item-1.png', groups: ['design', 'illustration'] },
      { image: '/assets/images/portfolio/item-2.png', groups: ['branding'] },
      { image: '/assets/images/portfolio/item-3.png', groups: ['illustration'] },
      { image: '/assets/images/portfolio/item-6.png', groups: ['design', 'branding'] },
      { image: '/assets/images/portfolio/item-8.png', groups: ['illustration'] },
      { image: '/assets/images/portfolio/item-5.png', groups: ['design'] },
      { image: '/assets/images/portfolio/item-1.png', groups: ['branding'] },
      { image: '/assets/images/portfolio/item-3.png', groups: ['design', 'illustration', 'branding'] },
      { image: '/assets/images/portfolio/item-7.png', groups: ['illustration'] }
    ],
    filters: [
      {
        title:'All',
        value: 'all',
        active: true
      },
      {
        title: 'UI/UX Design',
        value: 'design'
      },
      {
        title: 'BRANDING',
        value: 'branding'
      },
      {
        title: 'ILLUSTRATION',
        value: 'illustration'
      }
    ]
  })
}
