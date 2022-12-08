# tRPC Server

## Version

We are currently using [tRPC Version 9](https://trpc.io/docs/v9/).

## Files

- `index.ts` - Entry point for tRPC server
  - Do not change any of these variable names. They have been configured with the trpc-nuxt package.
- `router.ts` - tRPC router definition
  - `routers/*.ts`: **🔴 this is where the main backend logic lives 🔴**; individual router definitions are implemented in the specific modules within `routers/`, and then combined inside `router.ts` (see [tRPC docs](https://trpc.io/docs/v9/merging-routers))
- `createContext.ts` - functions to create request context on each request. Useful to inject context with request or response objects.
- `createRouter.ts` - functions to create routers.

## Salesforce Usage

See [salesforce-usage.md](salesforce-usage.md)
