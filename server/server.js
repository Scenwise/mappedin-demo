// server/server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Readable } from "stream";

// --- Helpers to build a Fetch Request for React Router ---
function createFetchRequest(req) {
  const origin = `${req.protocol}://${req.get("host")}`;
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();

  const init = {
    method: req.method,
    headers: Object.fromEntries(Object.entries(req.headers).map(([k, v]) => [k, Array.isArray(v) ? v.join(",") : v])),
    signal: controller.signal,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req;
  }

  req.on("close", () => controller.abort());

  return new Request(url, init);
}

// Converts a Web Response body → Node.js response stream
async function sendWebResponse(webRes, expressRes) {
  expressRes.status(webRes.status);

  webRes.headers.forEach((value, key) => {
    expressRes.setHeader(key, value);
  });

  if (!webRes.body) {
    return expressRes.end();
  }

  const reader = webRes.body.getReader();

  async function pump() {
    const { done, value } = await reader.read();
    if (done) return expressRes.end();
    expressRes.write(Buffer.from(value));
    return pump();
  }

  return pump();
}

// -----------------------------------------------------------
//             ✅ Resolve paths and load React Router SSR
// -----------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientBuildPath = path.join(__dirname, "../build/client");
const serverBuildFile = path.join(__dirname, "../build/server/index.js");

console.log("📦 Loading SSR build:", serverBuildFile);
const build = await import(serverBuildFile);

// Extract SSR handler from build
const handleRequest =
  build.entry?.module?.default ||
  build.default ||
  build.handleRequest;

if (typeof handleRequest !== "function") {
  console.error("❌ ERROR: Could not extract handleRequest from SSR build");
  console.error(build);
  process.exit(1);
}

// -----------------------------------------------------------
//                       ✅ Express App
// -----------------------------------------------------------
const app = express();

// ✅ Serve static files
app.use(
  express.static(clientBuildPath, {
    immutable: true,
    maxAge: "1y",
  })
);

// -----------------------------------------------------------
//     ✅ CATCH-ALL SSR route using Express 5 compatible RegExp
// -----------------------------------------------------------
app.all(/.*/, async (req, res, next) => {
  try {
    const fetchReq = createFetchRequest(req);

    const response = await handleRequest(fetchReq, build);


    await sendWebResponse(response, res);
  } catch (err) {
    console.error("SSR Error:", err);
    next(err);
  }
});

// -----------------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
