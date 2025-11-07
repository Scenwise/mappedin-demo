export const config = {
  runtime: "edge"
};

import build from "../build/server/index.js";

export default async function handler(request) {
  return build.entry.module.default({
    request,
    params: {},
    context: {}
  });
}
