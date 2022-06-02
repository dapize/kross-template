import { ISkill } from '@components/Skills'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  list: ISkill[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    list: [
      { title: 'Web Design', percentage: 90, color: '#fdb157' },
      { title: 'Logo Design', percentage: 60, color: '#9473e6' },
      { title: 'After Effects', percentage: 80, color: '#bdecf6' },
      { title: 'Web App', percentage: 70, color: '#ffbcaa' },
    ]
  })
}
