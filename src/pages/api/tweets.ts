// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Tweets = {
  text: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tweets[]>
) {
  res.status(200).json([
    { text: 'Vai' },
    { text: 'Dá' },
    { text: 'Certo' }
  ])
}
