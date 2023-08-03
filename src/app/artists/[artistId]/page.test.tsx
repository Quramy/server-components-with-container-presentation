/**
 *
 * @jest-environment jest-environment-jsdom
 *
 */
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import { ArtistPagePresentation } from './page'

describe(ArtistPagePresentation, () => {
  it("renders artist's name", () => {
    render(<ArtistPagePresentation artist={{ name: 'John Coltrane', biography: '' }} />)
    expect(screen.getByText('John Coltrane')).toBeInTheDocument()
  })
})
