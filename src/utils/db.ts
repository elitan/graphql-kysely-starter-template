import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";
import { type DB } from "./kysely-types";
import { Pool } from "pg";

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
  plugins: [new CamelCasePlugin()],
});

export { db };
