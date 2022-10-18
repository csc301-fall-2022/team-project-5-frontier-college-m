# Frontier College

## Prerequisites

- [Node.js](https://nodejs.org/en/) 16.x
  - Recommend [fnm](https://github.com/Schniz/fnm) for Node.js version management
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)
- [VS Code](https://code.visualstudio.com/) for the best experience
  - Don't forget to install the recommended VS Code extensions when prompted
  - Enable "Takeover Mode" for Vue typechecking - [Instructions](https://github.com/johnsoncodehk/volar/discussions/471)

## Setup

Run the following commands after cloning this git repository.

```bash
# Install Node.js dependencies
pnpm install

# Start a local PostgreSQL instance
# If this command fails make sure to start the Docker app
docker-compose up -d

# Migrate the database schema
pnpm run db-migrate

# Stop the local POstgreSQL instance when you're done
docker-compose down
```

## Development Server

Run the following commands to start the development server.

```bash
# Start the development server
pnpm run dev
```

## Tests

Run the following commands to run unit and E2E tests.

```bash
# Runs unit tests and E2E tests
# Starts the development server to run E2E tests
pnpm run test-dev

# Or if the dev server is already running
pnpm run test
```

## Production

Build the application for production:

```bash
# Build the application
pnpm run build

# Locally preview the production build
pnpm run preview
```

## Frontend Notes:

- This project uses Vue SFCs.
- Vue components should be built using [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html) syntax
- [WindiCSS](https://windicss.org/) has been configured to Tailwind-like styles.

## TODOs

[] ESLint for formatting and linting
[] Configure heroku (prod and preview environments)

## Notes

- `@types/node` pinned while waiting for this [bug](https://github.com/vuejs/core/pull/6855) to be patched
- `trpc-nuxt` patch

## Sources

Resources we consulted or borrowed code from to create this stack.

- https://github.com/trpc/examples-next-prisma-starter
- https://github.com/t3-oss/create-t3-app
- https://vee-validate.logaretm.com/v4/integrations/zod-schema-validation
- https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-heroku
- https://www.prisma.io/docs/guides/deployment/deploy-database-changes-with-prisma-migrate
