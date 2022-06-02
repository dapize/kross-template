import type { NextApiRequest, NextApiResponse } from 'next'

import { ILogo } from '@components/Clients';

type Data = {
  logos: ILogo[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.status(200).json({
    logos: [
      { image: '/assets/images/clients-logo/client-logo-1.png', width: 139, height: 25 },
      { image: '/assets/images/clients-logo/client-logo-2.png', width: 144, height: 36 },
      { image: '/assets/images/clients-logo/client-logo-3.png', width: 113, height: 35 },
      { image: '/assets/images/clients-logo/client-logo-4.png', width: 118, height: 30 },
      { image: '/assets/images/clients-logo/client-logo-5.png', width: 121, height: 43 },
      { image: '/assets/images/clients-logo/client-logo-1.png', width: 139, height: 25 },
      { image: '/assets/images/clients-logo/client-logo-2.png', width: 144, height: 36 },
      { image: '/assets/images/clients-logo/client-logo-3.png', width: 113, height: 35 },
      { image: '/assets/images/clients-logo/client-logo-4.png', width: 118, height: 30 },
      { image: '/assets/images/clients-logo/client-logo-5.png', width: 121, height: 43 },
    ]
  })
}
