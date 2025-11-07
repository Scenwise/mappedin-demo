import esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["build/server/index.js"],
  outfile: "netlify/functions/server.cjs",
  platform: "node",
  target: "node18",
  format: "cjs",
  bundle: true,
});
