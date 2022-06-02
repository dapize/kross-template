import { IExperience } from '@components/Experience'
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  list: IExperience[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    list: [
      {
        period: 'Jan 2007 - Feb 2009',
        title: 'Junior UX Designer',
        company: 'WEBEX',
        icon: '/assets/images/experience/icon-1.png'
      },
      {
        period: 'Mar 2009 - Aug 2014',
        title: 'UX & UI Designer',
        company: 'AUGMEDIX',
        icon: '/assets/images/experience/icon-2.png'
      },
      {
        period: 'Sep 2014 - Present',
        title: 'Senior UI Designer',
        company: 'THEMEFISHER',
        icon: '/assets/images/experience/icon-3.png'
      }
    ]
  })
}
