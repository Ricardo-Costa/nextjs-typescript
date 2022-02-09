// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Post = {
  title: string
  body: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const { pid } = req.query

  console.log(pid)
  // res.end(`Post: ${pid}`)

  res.status(200).json([
    { title: 'Vai', body: 'Este é o corpo da postagem.' },
    { title: 'Dá', body: 'Este é o corpo da postagem.' },
    { title: 'Certo', body: 'Este é o corpo da postagem.' }
  ])
}