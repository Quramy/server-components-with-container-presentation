import Link from 'next/link'
import { prisma } from '@/prismaClient'

export default async function Home() {
  const artists = await prisma.artist.findMany({ orderBy: { name: 'asc' }, take: 10 })
  return (
    <div>
      <ul>
        {artists.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/artists/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
