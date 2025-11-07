import fs from "fs";
import path from "path";

fs.copyFileSync(
  "build/server/index.js",
  "netlify/functions/server.cjs"
);