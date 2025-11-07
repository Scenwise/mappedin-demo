import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import build from "../build/server/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 1. Serve client static files
app.use(
  express.static(path.join(__dirname, "../build/client"), {
    index: false
  })
);

// 2. SSR handler from React Router build
app.all("*", async (req, res, next) => {
  try {
    const handler = build.entry.module.default;

    const response = await handler({
      request: req,
      params: {},
      context: {}
    });

    // Handle Response objects (from RR)
    if (response instanceof Response) {
      const body = await response.text();
      res.status(response.status).set(Object.fromEntries(response.headers));
      return res.send(body);
    }

    // Fallback for string HTML
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ SSR server running on port " + PORT);
});