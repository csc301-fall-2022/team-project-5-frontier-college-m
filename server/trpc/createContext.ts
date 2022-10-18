import PrismaPkg from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";
import type { H3Event } from "h3";

// Do this weird importing since Prisma doesn't work with ESM
const { PrismaClient } = PrismaPkg;
const prisma = new PrismaClient();

// TODO Fix how prisma is injected into the context so that it can be mocked
// TODO Fix how the compatibility event is injected into the context so that it can be mocked

export async function createContext(reqRes: H3Event) {
  return { prisma, reqRes };
}

export type Context = inferAsyncReturnType<typeof createContext>;
