const build = require("./server.cjs");

exports.handler = build.ssr.handler;

