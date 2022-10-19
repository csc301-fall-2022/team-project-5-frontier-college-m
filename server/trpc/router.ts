import { createRootRouter } from './createRouter'
import { prisma } from './prisma'

export const router = createRootRouter().query('hello', {
  async resolve() {
    return await prisma.user.count()
  }
})
