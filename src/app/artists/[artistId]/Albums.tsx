import type { Album } from '@prisma/client'
import { prisma } from '@/prismaClient'

type PresentationProps = {
  readonly albums: readonly Pick<Album, 'id' | 'name' | 'releaseYear'>[]
}

export function AlbumsPresentation({ albums }: PresentationProps) {
  return (
    <ul>
      {albums.map(({ id, name, releaseYear }) => (
        <li key={id}>
          {name}&nbsp;({releaseYear})
        </li>
      ))}
    </ul>
  )
}

type Props = {
  readonly artistId: string
}

export async function Albums({ artistId }: Props) {
  const albums = await prisma.album.findMany({ where: { artistId }, orderBy: { releaseYear: 'asc' } })
  return <AlbumsPresentation albums={albums} />
}
