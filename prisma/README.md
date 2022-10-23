# Prisma

[Prisma](https://www.prisma.io/docs/getting-started/quickstart) is the object relation mapper (ORM) for this project. Prisma allows you define your schema using the `schema.prisma` file.

## Files and Folders

`migrations` - Auto-generated SQL migration files generated from `schema.prisma`. Migrations will be automatically deployed to production. Make sure that migrations are backwards compatible.
`seed.ts` - This file is run when the DB is initially migrated to populate the DB with some starting data. This is helpful for testing or creating preview environments quickly.
