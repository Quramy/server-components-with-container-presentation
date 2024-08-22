/**
 *
 * @jest-environment @quramy/jest-prisma-node/environment
 *
 */
import { notFound } from 'next/navigation'
import { initialize } from '@quramy/prisma-fabbrica'

import { ArtistFactory } from '@/factories'
import { getProps } from '@/lib/testing/getProps'

import { ArtistPage, ArtistPagePresentation } from './page'
import { Albums } from './Albums'

jest.mock('next/navigation', () => ({ notFound: jest.fn() }))
jest.mock('@/prismaClient', () => ({ prisma: jestPrisma.client }))

describe(ArtistPage, () => {
  beforeEach(() => initialize({ prisma: jestPrisma.client }))

  it('redirects to 404 for not existing artist id', async () => {
    await ArtistPage({ params: { artistId: 'NOT_EXISTING_ID' } })

    expect(notFound).toBeCalledTimes(1)
  })

  it('passes fetched data to presentational component for existing id', async () => {
    const created = await ArtistFactory.create()

    const el = await ArtistPage({ params: { artistId: created.id } })

    expect(getProps<typeof ArtistPagePresentation>(el, ArtistPagePresentation)!.artist).toMatchObject({
      name: created.name,
      biography: created.biography,
    })
    expect(getProps<typeof Albums>(el, Albums)!.artistId).toBe(created.id)
  })
})
