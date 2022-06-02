import type { NextApiRequest, NextApiResponse } from 'next'

import { IMember } from '@components/Team';

type Data = {
  members: IMember[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    members: [
      { name: 'Jack Schenziwe', role: 'Project Manager', image: '/assets/images/team/member-1.png' },
      { name: 'Jack Schenziwe', role: 'Project Manager', image: '/assets/images/team/member-2.png' },
      { name: 'Jack Schenziwe', role: 'Project Manager', image: '/assets/images/team/member-3.png' }
    ]
  })
}
