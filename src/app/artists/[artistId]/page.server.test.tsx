/**
 *
 * @jest-environment @quramy/jest-prisma-node/environment
 *
 */
import { notFound } from 'next/navigation'
import { initialize } from '@quramy/prisma-fabbrica'

import { ArtistFactory } from '@/factories'

import { ArtistPage, ArtistPagePresentation } from './page'

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

    const { type, props } = await ArtistPage({ params: { artistId: created.id } })

    expect(type).toBe(ArtistPagePresentation)
    expect(props).toMatchObject({
      artist: {
        name: created.name,
        biography: created.biography,
      },
    } satisfies React.ComponentProps<typeof ArtistPagePresentation>)
  })
})
