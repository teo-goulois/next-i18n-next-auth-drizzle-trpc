import type { Config } from "drizzle-kit";
import "dotenv/config";

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/lib/db/schema/*.ts",
  out: "./src/lib/db/migrations",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  breakpoints: true,
  driver: "mysql2",
} satisfies Config;
