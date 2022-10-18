import * as trpc from "@trpc/server";
import { ZodError } from "zod";
import superjson from "superjson";

import { Context } from "./createContext";

export function createRootRouter() {
  return trpc
    .router<Context>()
    .transformer(superjson)
    .formatError(({ shape, error }) => {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.code === "BAD_REQUEST" && error.cause instanceof ZodError
              ? error.cause.flatten()
              : null,
        },
      };
    });
}

export function createRouter() {
  return trpc.router<Context>();
}
