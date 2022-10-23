// eslint-disable-next-line import/default
import PrismaPkg from '@prisma/client'
const { PrismaClient } = PrismaPkg

// Import PrismaClient in this funny way since Prisma doesn't work with ESM

export const prisma = new PrismaClient()
