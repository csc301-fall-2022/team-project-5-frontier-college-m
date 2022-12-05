# Frontier College

## For TAs

- TD1: https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/tree/main/deliverable-1
- TD2: https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/tree/main/deliverable-2
  - The TD2 README can be found at `deliverable-2/README.md`
- TD3: https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/tree/main/deliverable-3

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
# Clean install (deletes build artifacts)
pnpm run clean
```

Add the following sensitive environment variables to the `.env` file to connect to a SalesForce environment. This application has been developed to integrate with United for Literacy's SalesForce environment as of December 4th, 2022. See [`server/trpc/salesforce-usage.md`](https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/tree/main/server/trpc/salesforce-usage.md) for more details.

```bash
# Leave this as default
DATABASE_URL="postgresql://root:password@localhost:5433/root?schema=public"

# Fill in these values according to salesforce sandbox
SF_BASE_URL="https://frontiercollege--group467.sandbox.my.salesforce.com"
SF_CLIENT_ID="<SalesForce Client ID>"
SF_CLIENT_SECRET="<SalesForce Client Secret>"
SF_USERNAME="<SalesForce Username>"
SF_PASSWORD="<SalesForce Password>"
```

For more information see [`server/trpc/README.md`](https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/tree/main/server/trpc)

## Development Server

Run the following commands to start the development server.

```bash
# Start the development server
pnpm run dev
```

## Local Database

Run the following commands to start the local database

```bash
# Start a local PostgreSQL instance
# If this command fails make sure to start the Docker app
docker-compose up -d

# Migrate the database schema
pnpm run db-migrate

# Stop the local POstgreSQL instance when you're done
docker-compose down
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

## Deployment Instructions

### Production Environment

This stack can be deployed to many environments such as Linux VPSs, Docker, or managed services like Heroku. The production environment must have the following configured:

- [Node.js](https://nodejs.org/en/) 16.x
  - Recommend [fnm](https://github.com/Schniz/fnm) for Node.js version management
- [pnpm](https://pnpm.io/)
- Access to a PostgreSQL database
- Build artifact from the `pnpm run build` command which is outputted to the `.output` directory.

### Environment Variables

The following environment variables also need to be set in the environment.

```bash
# Production Specific Environment Variables
HOST="0.0.0.0"
NODE_ENV="production"
NPM_CONFIG_PRODUCTIOn="false"

# Replace w/ Production URL
DATABASE_URL="postgresql://root:password@localhost:5433/root?schema=public"

# Fill in these values according to Production Salesforce sandbox
SF_BASE_URL="https://frontiercollege--group467.sandbox.my.salesforce.com"
SF_CLIENT_ID="<SalesForce Client ID>"
SF_CLIENT_SECRET="<SalesForce Client Secret>"
SF_USERNAME="<SalesForce Username>"
SF_PASSWORD="<SalesForce Password>"
```

### Running in Production

The following commands can be used to start the service in production.

```bash
# Perform a database migration on the production database
pnpm exec prisma migrate deploy

# Start the web application
node ./.output/server/index.mjs
```

### Heroku Deployment

This project can be quickly deployed using Heroku to host a database, server, and manage environment variables.

Configuration details can be found in the `Procfile` and `app.json` files.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

<!-- 1. Create a new Heroku app
2. Add the `Heroku Postgres Add-On` to your app. This will automatically configure the `DATABASE_URL` environment variable
3. Set the other remaining environment variables
4. Link this repository to your Heroku app
5. Push your app to Heroku.

Remaining Heroku configuration for the build environment and scripts can be found in `app.json` and `Procfile` respectively.

See the following [Heroku Guide](https://devcenter.heroku.com/articles/git) for help completing steps 1, 4, and 5. Steps 2 and 3 can be completed using Heroku's web interface. -->

## Application Stack

At a high level this is a full-stack web application developed using Node.js and TypeScript. A single server hosts the server-side rendered frontend and backend API. The API has the option to connect with a PostgreSQL database. The backend API connects to SalesForce using the REST API.

Directory specific documentation can be found in `README.md` files in each of the root directories.

### Frontend

- The frontend is built using [Nuxt](https://nuxt.com/)
- This project uses [Vue Single File Components](https://vuejs.org/guide/scaling-up/sfc.html).
- Vue components should be built using [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html) syntax
- [WindiCSS](https://windicss.org/) has been configured for Tailwind-like styles.

### Backend

- Backend code can be found in the `server` directory.
- The backend is built using [tRPC](https://trpc.io/) to allow sharing types between the frontend and backend.
- Database can be accessed using [Prisma](https://www.prisma.io/) ORM.

## Notes

- `@types/node` pinned while waiting for this [bug](https://github.com/vuejs/core/pull/6855) to be patched
<!-- - `trpc-nuxt` has been patched to use `superjson` transformer` -->

## Sources

Resources we consulted or borrowed code from to create this stack.

- https://github.com/trpc/examples-next-prisma-starter
- https://github.com/t3-oss/create-t3-app
- https://vee-validate.logaretm.com/v4/integrations/zod-schema-validation
- https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-heroku
- https://www.prisma.io/docs/guides/deployment/deploy-database-changes-with-prisma-migrate

## License

```
Copyright 2022 Samm Du, Michael Lai, Zachary Lee, Shawn Plotko, Greg Sherman, Ricky Yi, Patrick Zhou

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
