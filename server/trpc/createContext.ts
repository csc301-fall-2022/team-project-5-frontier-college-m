import { inferAsyncReturnType } from "@trpc/server";

// export async function createContext(reqRes: H3Event) { - may need this for cookies access
export async function createContext() {
  return {};
}

export type Context = inferAsyncReturnType<typeof createContext>;
