import { PrismaClient } from '@prisma/client'
import { initialize } from '@quramy/prisma-fabbrica'
import { ArtistFactory } from '../src/factories'

export async function main() {
  const prisma = new PrismaClient()
  initialize({ prisma })

  await prisma.album.deleteMany()
  await prisma.artist.deleteMany()

  await ArtistFactory.create({
    name: 'John Coltrane',
    biography:
      'In 1955, Coltrane was freelancing in Philadelphia while studying with Sandole when he received a call from trumpeter Miles Davis. Davis had been successful in the 1940s, but his reputation and work had been damaged in part by heroin addiction; he was again active and about to form a quintet. Coltrane was with this edition of the Davis band (known as the "First Great Quintet"—along with Red Garland on piano, Paul Chambers on bass, and Philly Joe Jones on drums) from October 1955 to April 1957 (with a few absences).',
  })
}

main()
