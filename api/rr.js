import build from "../build/server/index.js";

export default async function handler(request) {
  const url = new URL(request.url);

  return build.entry.module.default({
    request,
    params: {},
    context: {},
  });
}
