import { notFound } from 'next/navigation'
import { prisma } from '@/prismaClient'

type Props = {
  readonly params: {
    readonly artistId: string
  }
}

export async function ArtistPage({ params: { artistId } }: Props) {
  const artist = await prisma.artist.findUnique({ where: { id: artistId } })

  if (!artist) {
    return notFound()
  }

  return (
    <>
      <h1>{artist.name}</h1>
      <blockquote>{artist.biography}</blockquote>
    </>
  )
}

export default ArtistPage
