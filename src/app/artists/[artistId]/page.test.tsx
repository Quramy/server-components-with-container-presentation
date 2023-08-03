/**
 *
 * @jest-environment jest-environment-jsdom
 *
 */
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import { ArtistPagePresentation } from './page'

function Suspended() {
  throw new Promise(() => null)
  return null
}

describe(ArtistPagePresentation, () => {
  it('indicates loading status', () => {
    render(<ArtistPagePresentation artist={{ name: 'John Coltrane', biography: '' }} albumsNode={<Suspended />} />)
    expect(screen.getByRole('alert', { busy: true })).toBeInTheDocument()
  })

  it("renders artist's name", () => {
    render(<ArtistPagePresentation artist={{ name: 'John Coltrane', biography: '' }} />)
    expect(screen.getByText('John Coltrane')).toBeInTheDocument()
  })
})
