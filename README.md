# The EdgeDB MCU sandbox

This is a sandbox for playing with EdgeDB and the EdgeQL query builder in a Next.js environment.

## Setup

#### 1. Install the EdgeDB CLI

```bash
# macOS/Linux
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh

# windows
$ iwr https://ps1.edgedb.com -useb | iex
```

#### 2. Clone the repo

```bash
git clone git@github.com:colinhacks/edgedb-movies.git
cd edgedb-movies
```

#### 3. Install dependencies

```bash
yarn
```

#### 4. Initialize the EdgeDB project

```bash
edgedb project init
```

Then follow the prompts. This step spins up a local EdgeDB instance and apply all the migrations inside `dbschema/migrations`.

After the project is initialized, all EdgeDB clients initialized inside the project directory will connect to the newly-created instance automatically—no need for environment variables or hard-coded configuration. ([Read more about projects here.](https://www.edgedb.com/docs/guides/projects))

#### 5. Generate the query builder

```bash
npx edgeql-js
```

#### 6. Seed the database

```bash
npx ts-node seed.ts
```

#### 7. Start the dev server

```bash
yarn dev
```

The application is now running on [localhost:3000](http://localhost:3000).

## Playing with the project

The sandbox consists of a single-page Next.js application.

- `pages/index.tsx` - the homepage
- `query.ts` - the query executed inside the homepage's `getServerSideProps`. the result is pretty-printed on the homepage.
- `dbschema/default.esdl` - the schema file
- `dbschema/migrations` - the migrations directory
- `dbschema/edgeql-js` - the default location of the generated query builder

## Evolving the schema

1. Update the schema in `dbschema/default.esdl`
2. Generate a new migration with `edgedb migration create`
3. Follow the interactive prompts
4. Apply the migration with `edgedb migrate`
5. Regenerate the query builder with `npx edgeql-js`
