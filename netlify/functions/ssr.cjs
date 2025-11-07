const build = require("./server.cjs");

// React Router SSR entry handler
exports.handler = build.entry.module.default;

