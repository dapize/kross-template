import type { NextApiRequest, NextApiResponse } from 'next'

import { IComment } from '@components/Comments';

type Data = {
  list: IComment[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    list: [
      {
        id: 1,
        avatar: '/assets/images/user-1.jpg',
        author: 'Carole Marvin.',
        date: '15 january 2015 At 10:30 pm',
        content: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem.',
      },
      {
        id: 2,
        avatar: '/assets/images/user-2.jpg',
        author: 'Jaquan Rolfson.',
        date: '15 january 2015 At 10:30 pm',
        content: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem',
      },
      {
        id: 3,
        avatar: '/assets/images/user-3.jpg',
        author: 'Bruce Bernier.',
        date: '15 january 2015 At 10:30 pm',
        content: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem',
      },
    ]
  })
}
