import type { Meta, StoryObj } from '@storybook/react'

import { ArtistPagePresentation as ArtistPage } from './page'

export default {
  title: 'ArtistPage',
  component: ArtistPage,
} satisfies Meta

type Story = StoryObj<typeof ArtistPage>

export const Default = {
  args: {
    artist: {
      name: 'John Coltrane',
      biography:
        "Coltrane was born in his parents' apartment at 200 Hamlet Avenue in Hamlet, North Carolina, on September 23, 1926.",
    },
  },
} satisfies Story
