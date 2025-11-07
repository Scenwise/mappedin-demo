import path from "path";
import { createRequestHandler } from "react-router";
import { fileURLToPath } from "url";

// path to your server build
const { createRequestHandler } = require("react-router");
const build = require("./server.cjs");

exports.handler = createRequestHandler(build);
