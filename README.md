# Frontier College

## For TAs
- TD1: https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/tree/main/deliverable-1
- TD2: https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/tree/main/deliverable-2
  - The TD2 README can be found at `deliverable-2/README.md`

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
