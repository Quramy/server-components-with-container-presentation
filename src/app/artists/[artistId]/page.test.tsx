/**
 *
 * @jest-environment jest-environment-jsdom
 *
 */
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import { ArtistPage } from './page'

describe(ArtistPage, () => {
  it("renders artist's name", async () => {
    await render(<ArtistPage params={{ artistId: 'absdefg' }} />)
    expect(screen.getByText('John Coltrane')).toBeInTheDocument()
  })
})
