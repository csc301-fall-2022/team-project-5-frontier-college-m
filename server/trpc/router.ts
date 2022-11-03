import { createRootRouter, createRouter } from './createRouter'
import { prisma } from './prisma'
import { z } from 'zod'
import { td2Data } from '~/shared/d2-dummy-data'

export const helloRouter = createRouter().query('hello', {
  async resolve() {
    return await prisma.user.count()
  }
});

const userRouter = createRouter().query('user', {
  input: z.object({
    userId: z.number().int().nonnegative()
  }),
  resolve({input})  {
    return {
      userId: input.id,
      name: td2Data.users[input.userId].name
    };
  },
});

export const router = createRootRouter()
  .merge(helloRouter)
  .merge(userRouter)
;
