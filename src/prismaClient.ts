import { PrismaClient } from '@prisma/client'

export const prisma = typeof window === 'undefined' ? new PrismaClient() : (null as never)
