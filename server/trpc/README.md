# tRPC Server

## Version

We are currently using [tRPC Version 9](https://trpc.io/docs/v9/).

## Files

- `index.ts` - Entry point for tRPC server
  - Do not change any of these variable names. They have been configured with the trpc-nuxt package.
- `router.ts` - tRPC router definition
- `createContext.ts` - functions to create request context on each request. Useful to inject context with request or response objects.
- `createRouter.ts` - functions to create routers. Routers can be used to organize collections of related features and merged, see [tRPC docs](https://trpc.io/docs/v9/merging-routers)
- `prisma.ts` - Global ORM client that can be imported to interact with the database
