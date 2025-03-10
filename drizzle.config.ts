import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

// import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";
// dotenv.config({ path: ".env" });

// export default {
//   driver: "pg",
//   schema: "./database/schema.ts",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// } satisfies Config;
