import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./routes/layout.tsx", [
    index("./routes/home.tsx"),
    route("/space/:id", "./routes/space.tsx"),
  ]),
] satisfies RouteConfig;