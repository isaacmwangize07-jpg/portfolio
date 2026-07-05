import { existsSync, unlinkSync } from "node:fs";

if (existsSync("package-lock.json")) {
  unlinkSync("package-lock.json");
}

if (existsSync("yarn.lock")) {
  unlinkSync("yarn.lock");
}

const userAgent = process.env.npm_config_user_agent ?? "";

if (!userAgent.startsWith("pnpm/")) {
  console.error("Use pnpm instead");
  process.exit(1);
}