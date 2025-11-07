import path from "path";
import { createRequestHandler } from "react-router";
import { fileURLToPath } from "url";

// path to your server build
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const build = await import(path.join(__dirname, "../../build/server/index.js"));

export const handler = createRequestHandler(build);
