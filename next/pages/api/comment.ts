import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string,
  id: number
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    message: '¡Comment added successfully!',
    id: Math.floor(Math.random() * (100 - 1 + 1) + 1)
  })
}
