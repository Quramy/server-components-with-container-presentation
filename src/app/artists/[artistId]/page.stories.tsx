import type { Meta, StoryObj } from '@storybook/react'

import { ArtistPage } from './page'

export default {
  title: 'ArtistPage',
  component: ArtistPage,
} satisfies Meta

type Story = StoryObj<typeof ArtistPage>

export const Default = {
  args: {
    params: {
      artistId: 'abcdefg',
    },
  },
} satisfies Story
