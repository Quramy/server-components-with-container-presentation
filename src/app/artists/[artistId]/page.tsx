import { notFound } from 'next/navigation'
import { prisma } from '@/prismaClient'

import { Albums } from './Albums'

type PresentationProps = {
  readonly artist: {
    readonly id: string
    readonly name: string
    readonly biography: string
  }
}

export function ArtistPagePresentation({ artist: { id, name, biography } }: PresentationProps) {
  return (
    <>
      <h1>{name}</h1>
      <blockquote>{biography}</blockquote>
      <Albums artistId={id} />
    </>
  )
}

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

  return <ArtistPagePresentation artist={artist} />
}

export default ArtistPage
