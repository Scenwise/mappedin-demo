import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createRequestHandler } from "@react-router/serve";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(
  express.static("build/client", {
    immutable: true,
    maxAge: "1y",
  })
);

app.all(
  "*",
  createRequestHandler({
    build: await import("../build/server/index.js"),
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("✅ Server running on port " + port);
});