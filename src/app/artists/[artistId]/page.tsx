import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { prisma } from '@/prismaClient'

import { Albums, AlbumsPresentation } from './Albums'

type PresentationProps = {
  readonly artist: {
    readonly name: string
    readonly biography: string
  }
  readonly albumsProps?: React.ComponentProps<typeof AlbumsPresentation>
  readonly albumsNode?: React.ReactNode
}

export function ArtistPagePresentation({
  artist: { name, biography },
  albumsProps,
  albumsNode = albumsProps && <AlbumsPresentation {...albumsProps} />,
}: PresentationProps) {
  return (
    <>
      <h1>{name}</h1>
      <blockquote>{biography}</blockquote>
      <Suspense
        fallback={
          <div role="alert" aria-busy="true">
            Loading...
          </div>
        }
      >
        {albumsNode}
      </Suspense>
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

  return <ArtistPagePresentation artist={artist} albumsNode={<Albums artistId={artist.id} />} />
}

export default ArtistPage
