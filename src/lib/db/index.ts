// db/index.ts
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
})


// create database connection
/* const connection = connect({
  url: process.env.DATABASE_URL,
}); */

export const db = drizzle(connection);
export type DbClient = typeof db;
