import { defineArtistFactory, defineAlbumFactory } from './__generated__/fabbrica'

export const ArtistFactory = defineArtistFactory()

export const AlbumFactory = defineAlbumFactory({
  defaultData: {
    artist: ArtistFactory,
  },
})
