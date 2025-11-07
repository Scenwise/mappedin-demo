import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, NavLink, useNavigate, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import { useState, useEffect, createContext, useContext, cloneElement, useRef } from "react";
import { useMap, useMapData, MapView, Marker, useEvent } from "@mappedin/react-sdk";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, X, LoaderCircle, BusFront, ShieldUser, TriangleRight, Icon, DoorOpen, XIcon, Info, Navigation, Settings2, ChevronsUpDown, ChevronRight, Trees, Building, ArrowLeft, Layers, ExternalLink, LocateOff, Locate, Pause, RotateCcw, Play } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectTrigger as SelectTrigger$1 } from "@radix-ui/react-select";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as LabelPrimitive from "@radix-ui/react-label";
import { chevronsUpDownSquare, escalatorArrowUpRight, stairsArrowUpRight } from "@lucide/lab";
import * as RechartsPrimitive from "recharts";
import { AreaChart, CartesianGrid, XAxis, Area } from "recharts";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TooltipTrigger as TooltipTrigger$1 } from "@radix-ui/react-tooltip";
import { useLocation } from "react-router-dom";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function TypographyMuted({ children }) {
  return /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function FloorSelector() {
  const { mapData, mapView } = useMap();
  const [currentFloorStackId, setCurrentFloorStackId] = useState(
    mapView.currentFloorStack.id
  );
  const [currentFloorId, setCurrentFloorId] = useState(mapView.currentFloor.id);
  function handleFloorStackChange(floorStackId) {
    mapView.setFloorStack(floorStackId);
    setCurrentFloorStackId(floorStackId);
  }
  function handleFloorChange(floorId) {
    mapView.setFloor(floorId);
    setCurrentFloorId(floorId);
  }
  const floorStacks = mapData.getByType("floor-stack");
  const floors = floorStacks.find((floorStack) => floorStack.id == currentFloorStackId)?.floors.sort((a, b) => a.elevation - b.elevation);
  mapView.on("floor-change", (payload) => {
    setCurrentFloorStackId(payload.floor.floorStack.id);
    setCurrentFloorId(payload.floor.id);
  });
  if (floorStacks.length < 2 && (!floors || floors.length < 2)) return null;
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-3 p-3 bg-white/70 backdrop-blur-3xl rounded-xl", children: [
    floorStacks.length > 1 && /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx(Label, { children: "Building" }),
      /* @__PURE__ */ jsxs(
        Select,
        {
          value: currentFloorStackId,
          onValueChange: handleFloorStackChange,
          children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a building" }) }),
            /* @__PURE__ */ jsx(SelectContent, { children: floorStacks.map((floorStack) => /* @__PURE__ */ jsx(SelectItem, { value: floorStack.id, children: floorStack.name }, floorStack.id)) })
          ]
        }
      )
    ] }),
    floors && floors.length > 1 && /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx(Label, { children: "Floor" }),
      /* @__PURE__ */ jsxs(Select, { value: currentFloorId, onValueChange: handleFloorChange, children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a floor" }) }),
        /* @__PURE__ */ jsx(SelectContent, { children: floors?.map((floor) => /* @__PURE__ */ jsx(SelectItem, { value: floor.id, children: floor.name }, floor.id)) })
      ] })
    ] })
  ] });
}
function InteractionManager() {
  const { mapView, mapData } = useMap();
  useEffect(() => {
    if (!mapView || !mapData) return;
    mapData.getByType("space").filter(({ name }) => name?.length).forEach((space2) => {
      mapView.updateState(space2, {
        interactive: true,
        hoverColor: "lightgrey"
      });
    });
  }, [mapView, mapData]);
  return null;
}
const AppContext = createContext({});
function perlinNoise1D(seed, x) {
  const hash = (str) => {
    let hash2 = 0;
    for (let i = 0; i < str.length; i++) {
      hash2 = (hash2 << 5) - hash2 + str.charCodeAt(i);
      hash2 |= 0;
    }
    return hash2;
  };
  const noise = Math.sin(hash(seed) + x * 0.1) * 0.5 + 0.5;
  return noise;
}
const THEMES = { light: "", dark: ".dark" };
const ChartContext = React.createContext(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "chart",
      "data-chart": chartId,
      className: cn(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { children })
      ]
    }
  ) });
}
const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
const ChartTooltip = RechartsPrimitive.Tooltip;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();
  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
    if (labelFormatter) {
      return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: value });
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      ),
      children: [
        !nestLabel ? tooltipLabel : null,
        /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              ),
              children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [
                itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": indicatorColor,
                      "--color-border": indicatorColor
                    }
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5", children: [
                        nestLabel ? tooltipLabel : null,
                        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                      ] }),
                      item.value && /* @__PURE__ */ jsx("span", { className: "text-foreground font-mono font-medium tabular-nums", children: item.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            item.dataKey
          );
        }) })
      ]
    }
  );
}
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
function formatTime(timestamp) {
  const flooredTimestamp = Math.floor(timestamp);
  return `${flooredTimestamp < 10 ? `0${flooredTimestamp}` : flooredTimestamp}:${timestamp === flooredTimestamp ? "00" : "30"}`;
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function HeatmapWidget() {
  const { heatmapSpaceId, setHeatmapSpaceId } = useContext(AppContext);
  const { mapData } = useMap();
  const space2 = mapData.getById("space", heatmapSpaceId);
  if (!space2) return null;
  const chartData = Array.from({ length: 24 }, (_, i) => ({
    hour: formatTime(i),
    occupancy: Math.floor(perlinNoise1D(heatmapSpaceId, i * 3) * 100)
  }));
  const chartConfig = {
    occupancy: {
      label: "Occupancy",
      color: "#ff7c43"
    }
  };
  return /* @__PURE__ */ jsxs(Card, { className: "w-[200px] bg-white/70 backdrop-blur-3xl shadow-none py-3", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "items-center px-3", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-sm row-span-2", children: space2?.name }),
      /* @__PURE__ */ jsx(CardAction, { children: /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => setHeatmapSpaceId(void 0),
          variant: "ghost",
          size: "icon",
          className: "size-8",
          children: /* @__PURE__ */ jsx(X, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "px-3", children: /* @__PURE__ */ jsx(ChartContainer, { config: chartConfig, className: "min-h-[100px] w-full", children: /* @__PURE__ */ jsxs(AreaChart, { accessibilityLayer: true, data: chartData, children: [
      /* @__PURE__ */ jsx(CartesianGrid, { vertical: false }),
      /* @__PURE__ */ jsx(
        XAxis,
        {
          dataKey: "hour",
          tickLine: false,
          tickMargin: 10,
          axisLine: false
        }
      ),
      /* @__PURE__ */ jsx(ChartTooltip, { content: /* @__PURE__ */ jsx(ChartTooltipContent, {}) }),
      /* @__PURE__ */ jsx(
        Area,
        {
          dataKey: "occupancy",
          type: "step",
          fill: "var(--color-occupancy)",
          fillOpacity: 0.4,
          stroke: "var(--color-occupancy)"
        }
      )
    ] }) }) })
  ] });
}
function MyCustomComponent() {
  const { mapData, mapView } = useMap();
  useEffect(() => {
    if (mapData && mapView) {
      async function initializeLabels() {
        mapView.Labels.all();
      }
      initializeLabels();
    }
  }, [mapData, mapView]);
  return null;
}
function ConnectionMarkers() {
  const { mapData } = useMap();
  const connections = mapData.getByType("connection");
  const connectionIcons = {
    door: /* @__PURE__ */ jsx(DoorOpen, {}),
    stairs: /* @__PURE__ */ jsx(Icon, { iconNode: stairsArrowUpRight }),
    escalator: /* @__PURE__ */ jsx(Icon, { iconNode: escalatorArrowUpRight }),
    elevator: /* @__PURE__ */ jsx(Icon, { iconNode: chevronsUpDownSquare }),
    ramp: /* @__PURE__ */ jsx(TriangleRight, {}),
    slide: /* @__PURE__ */ jsx(TriangleRight, {}),
    portal: /* @__PURE__ */ jsx(TriangleRight, {}),
    security: /* @__PURE__ */ jsx(ShieldUser, {}),
    shuttle: /* @__PURE__ */ jsx(BusFront, {})
  };
  return connections.map((connection) => {
    const ConnectionIcon = connectionIcons[connection.type];
    return /* @__PURE__ */ jsx(Marker, { target: connection.coordinates[0], children: /* @__PURE__ */ jsxs("div", { className: "bg-primary text-primary-foreground flex rounded-sm py-1 px-2 gap-2 items-center", children: [
      ConnectionIcon && cloneElement(ConnectionIcon, { size: 14 }),
      connection.name.length ? connection.name : connection.type
    ] }) }, connection.id);
  });
}
function MappedInMap({ mapId, children }) {
  const { isLoading, error, mapData } = useMapData({
    key: "mik_yeBk0Vf0nNJtpesfu560e07e5",
    secret: "mis_2g9ST8ZcSFb5R9fPnsvYhrX3RyRwPtDGbMGweCYKEq385431022",
    mapId
  });
  const { heatmapSpaceId } = useContext(AppContext);
  const mapClassName = "w-full h-full bg-(--sidebar) rounded-2xl overflow-hidden col-[2/3] row-[1/3] ring ring-gray-100";
  if (isLoading || error) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${mapClassName} flex flex-col items-center justify-center gap-6`,
        children: [
          isLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(LoaderCircle, { size: 32, className: "animate-spin" }),
            /* @__PURE__ */ jsx(TypographyMuted, { children: "Loading map" })
          ] }),
          error && /* @__PURE__ */ jsx("span", { className: "text-red-500", children: error.message })
        ]
      }
    );
  }
  return mapData ? /* @__PURE__ */ jsxs(MapView, { mapData, className: mapClassName, children: [
    /* @__PURE__ */ jsx(MyCustomComponent, {}),
    /* @__PURE__ */ jsx(InteractionManager, {}),
    /* @__PURE__ */ jsx(ConnectionMarkers, {}),
    /* @__PURE__ */ jsx("aside", { className: "col-[1/2] row-[2/3] overflow-y-auto overflow-x-hidden", children }),
    /* @__PURE__ */ jsxs("nav", { className: "col-[2/3] row-[1/3] self-start justify-self-end relative z-10 p-2 overflox-y-auto space-y-4", children: [
      /* @__PURE__ */ jsx(FloorSelector, {}),
      heatmapSpaceId && /* @__PURE__ */ jsx(HeatmapWidget, {})
    ] })
  ] }) : null;
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return (
    // <TooltipProvider>
    /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props })
  );
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ...props,
      children
    }
  ) }) });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        "data-slot": "sidebar",
        className: cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        ),
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxs(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "data-slot": "sidebar-container",
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children
              }
            )
          }
        )
      ]
    }
  );
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
}
function SidebarGroupContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx(
      TooltipContent,
      {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      }
    )
  ] });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSubItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className),
      ...props
    }
  );
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function AppSidebar() {
  const items = [
    {
      to: "/",
      label: "Info",
      icon: Info
    },
    {
      to: "/navigation",
      label: "Navigation",
      icon: Navigation
    },
    {
      to: "/demos",
      label: "Demos",
      icon: Settings2
    }
  ];
  const location = useLocation();
  return /* @__PURE__ */ jsxs(Sidebar, { collapsible: "icon", variant: "sidebar", children: [
    /* @__PURE__ */ jsx(SidebarContent, { children: /* @__PURE__ */ jsx(SidebarGroup, { children: /* @__PURE__ */ jsx(SidebarGroupContent, { children: items.map((item) => /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger$1, { children: /* @__PURE__ */ jsx(
        SidebarMenuButton,
        {
          asChild: true,
          isActive: location.pathname === item.to,
          children: /* @__PURE__ */ jsx(NavLink, { to: item.to, children: item.icon && /* @__PURE__ */ jsx(item.icon, {}) })
        }
      ) }),
      /* @__PURE__ */ jsx(TooltipContent, { side: "right", children: item.label })
    ] }, item.to)) }) }) }),
    /* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsxs(
      "h1",
      {
        className: "scroll-m-20 text-xl font-medium tracking-tight",
        style: { writingMode: "sideways-lr" },
        children: [
          "Scenwise",
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: " | MappedIn Demo" })
        ]
      }
    ) })
  ] });
}
function AppContextProvider({
  children
}) {
  const [mapId, setMapId] = useState("65c0ff7430b94e3fabd5bb8c");
  const [navigationFrom, setNavigationFrom] = useState();
  const [navigationTo, setNavigationTo] = useState();
  const [heatmapSpaceId, setHeatmapSpaceId] = useState();
  return /* @__PURE__ */ jsx(
    AppContext.Provider,
    {
      value: {
        mapId,
        setMapId,
        navigationFrom,
        setNavigationFrom,
        navigationTo,
        setNavigationTo,
        heatmapSpaceId,
        setHeatmapSpaceId
      },
      children
    }
  );
}
function MapSelector({ value, onSelect }) {
  const mappedInDemos = [
    { label: "Airport", mapId: "6686b845c9f6d6000bc30300" },
    { label: "Arena", mapId: "672a6f4f3a45ba000b893e1c" },
    { label: "Community Centre", mapId: "660c0bb9ae0596d87766f2d9" },
    { label: "Craft Show", mapId: "67bf60e9679a9d000bfacd6f" },
    { label: "Event Space", mapId: "660c0c3aae0596d87766f2da" },
    { label: "Grocery Store", mapId: "6679882a8298d5000b85ee89" },
    { label: "Hospital", mapId: "67881b4666a208000badecc4" },
    { label: "Mall - Consumer", mapId: "660c0c6e7c0c4fe5b4cc484c" },
    { label: "Mall - Facility", mapId: "65c0ff7430b94e3fabd5bb8c" },
    { label: "Multifamily Mid-Rise", mapId: "666ca6a48dd908000bf47803" },
    { label: "Multifamily High-Rise", mapId: "67a6641530e940000bac3c1a" },
    { label: "Office", mapId: "64ef49e662fd90fe020bee61" },
    { label: "School", mapId: "65c12d9b30b94e3fabd5bb91" },
    { label: "School - Multi Floor", mapId: "66686f1af06f04000b18b8fa" },
    { label: "University Campus", mapId: "682e13a2703478000b567b66" },
    { label: "Warehouse", mapId: "667b26b38298d5000b85eeb0" }
  ];
  const mapLabel = mappedInDemos.find(({ mapId }) => mapId === value)?.label;
  return /* @__PURE__ */ jsxs(Select, { value, onValueChange: onSelect, children: [
    /* @__PURE__ */ jsx(SelectTrigger$1, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", className: "w-full", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold grow text-left", children: mapLabel }),
      /* @__PURE__ */ jsx(ChevronsUpDown, {})
    ] }) }),
    /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
      /* @__PURE__ */ jsx(SelectLabel, { children: "Demo maps" }),
      mappedInDemos.map(({ label, mapId }) => /* @__PURE__ */ jsx(SelectItem, { value: mapId, children: label }, mapId))
    ] }) })
  ] });
}
const layout = UNSAFE_withComponentProps(function Layout2() {
  return /* @__PURE__ */ jsx(AppContextProvider, {
    children: /* @__PURE__ */ jsxs(SidebarProvider, {
      defaultOpen: false,
      className: "max-h-svh",
      children: [/* @__PURE__ */ jsx(AppSidebar, {}), /* @__PURE__ */ jsx(Main, {})]
    })
  });
});
function Main() {
  const {
    mapId,
    setMapId
  } = useContext(AppContext);
  return /* @__PURE__ */ jsxs("main", {
    className: "p-4 grow overflow-hidden grid grid-rows-[2.25rem_auto] grid-cols-[20rem_3fr_max-content] gap-4",
    children: [/* @__PURE__ */ jsx("div", {
      className: "col-[1/2] row-[1/3]",
      children: /* @__PURE__ */ jsx(MapSelector, {
        value: mapId,
        onSelect: setMapId
      })
    }), /* @__PURE__ */ jsx(MappedInMap, {
      mapId,
      children: /* @__PURE__ */ jsx(Outlet, {})
    }, mapId)]
  });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: layout
}, Symbol.toStringTag, { value: "Module" }));
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ jsx(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CollapsiblePrimitive.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CollapsiblePrimitive.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}
function SpaceTreeCollapsible({
  children,
  icon,
  label
}) {
  const [open, setOpen] = useState(true);
  return /* @__PURE__ */ jsx(
    Collapsible,
    {
      className: "group/collapsible",
      open,
      onOpenChange: setOpen,
      children: /* @__PURE__ */ jsxs(SidebarMenuItem, { children: [
        /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(SidebarMenuButton, { children: [
          icon,
          label,
          /* @__PURE__ */ jsx(SidebarMenuAction, { children: /* @__PURE__ */ jsx(
            ChevronRight,
            {
              className: `transition-transform ${open ? "rotate-90" : ""}`
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx(SidebarMenuSub, { className: "pr-0 mr-0", children }) })
      ] })
    }
  );
}
function useClickNavigation() {
  const navigate = useNavigate();
  useEvent("click", ({ spaces }) => {
    if (spaces.length) navigate(`/space/${spaces[0].id}`);
  });
}
function pageTitle(title) {
  const DEFAULT_TITLE = "Scenwise MappedIn Demo";
  if (title) return `${title} | ${DEFAULT_TITLE}`;
  return DEFAULT_TITLE;
}
function PageHeader({ title }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: pageTitle(title) }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 bg-background z-10 py-2", children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: title }) })
  ] });
}
const info = UNSAFE_withComponentProps(function Info2() {
  const {
    mapData
  } = useMap();
  useClickNavigation();
  const floors = mapData.getByType("floor").sort((a, b) => a.elevation - b.elevation);
  const floorStacks = mapData.getByType("floor-stack");
  const spaces = mapData.getByType("space").filter(({
    name
  }) => name.length);
  const pois = mapData.getByType("point-of-interest");
  const spacesPerFloor = floors.map((floor) => ({
    floor,
    spaces: spaces.filter((space2) => space2.floor.id === floor.id).sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => a.name.length === 0 && b.name.length > 0 ? 1 : -1),
    // Sort unnamed spaces to the end
    pois: pois.filter((poi) => poi.floor.id === floor.id)
  }));
  const floorsPerStack = floorStacks.map((stack) => ({
    stack,
    floors: stack.floors.map((floor) => spacesPerFloor.find((f) => f.floor.id === floor.id)).filter((f) => f !== void 0)
  }));
  const stackIcons = {
    Building: /* @__PURE__ */ jsx(Building, {}),
    Trees: /* @__PURE__ */ jsx(Trees, {})
  };
  const [tab, setTab] = useState("spaces");
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(PageHeader, {
      title: "Info"
    }), /* @__PURE__ */ jsx("div", {
      className: "py-2",
      children: /* @__PURE__ */ jsxs(Tabs, {
        value: tab,
        onValueChange: (e) => setTab(e),
        children: [/* @__PURE__ */ jsxs(TabsList, {
          children: [/* @__PURE__ */ jsx(TabsTrigger, {
            value: "spaces",
            children: "Spaces"
          }), /* @__PURE__ */ jsx(TabsTrigger, {
            value: "pois",
            children: "Points of Interest"
          })]
        }), /* @__PURE__ */ jsx(SidebarMenu, {
          children: floorsPerStack.length === 1 ? /* @__PURE__ */ jsx(FloorsTree, {
            floors: floorsPerStack[0].floors,
            tab
          }) : floorsPerStack.map(({
            stack,
            floors: floors2
          }) => /* @__PURE__ */ jsx(SpaceTreeCollapsible, {
            icon: stackIcons[stack.type],
            label: stack.name,
            children: /* @__PURE__ */ jsx(FloorsTree, {
              floors: floors2,
              tab
            })
          }, stack.id))
        })]
      })
    })]
  });
});
function FloorsTree({
  floors,
  tab
}) {
  if (floors.length === 1) return /* @__PURE__ */ jsx(SpacesTree, {
    spaces: floors[0].spaces,
    pois: floors[0].pois,
    tab
  });
  return floors.filter((floor) => floor[tab].length).map(({
    floor,
    spaces,
    pois
  }) => /* @__PURE__ */ jsx(SpaceTreeCollapsible, {
    icon: /* @__PURE__ */ jsx("div", {
      className: "bg-primary text-primary-foreground size-4 place-content-center grid rounded-sm text-[0.65rem]",
      children: floor.elevation
    }),
    label: floor.name,
    children: /* @__PURE__ */ jsx(SpacesTree, {
      spaces,
      pois,
      tab
    })
  }, floor.id));
}
function SpacesTree({
  spaces,
  pois,
  tab
}) {
  const {
    mapView
  } = useMap();
  const navigate = useNavigate();
  function focusOnSpace(space2) {
    mapView.setFloor(space2.floor.id);
    mapView.Camera.focusOn(space2);
    navigate(`/space/${space2.id}`);
  }
  if (tab === "pois") return pois.map((poi) => /* @__PURE__ */ jsx(SidebarMenuSubItem, {
    children: /* @__PURE__ */ jsxs(SidebarMenuSubButton, {
      onClick: () => focusOnSpace(poi),
      children: [poi.name, " - ", poi.locationProfiles.length]
    })
  }, poi.id));
  if (tab === "spaces") return spaces.map((space2) => /* @__PURE__ */ jsx(SidebarMenuSubItem, {
    children: /* @__PURE__ */ jsx(SidebarMenuSubButton, {
      onClick: () => focusOnSpace(space2),
      children: /* @__PURE__ */ jsx("span", {
        children: space2.name
      })
    })
  }, space2.id));
  return null;
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: info
}, Symbol.toStringTag, { value: "Module" }));
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const space = UNSAFE_withComponentProps(function Space({
  params
}) {
  const {
    mapData
  } = useMap();
  useClickNavigation();
  const space2 = mapData.getById("space", params.id);
  if (!space2) {
    return /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col items-center justify-center gap-2",
      children: [/* @__PURE__ */ jsx("span", {
        children: "Space not found"
      }), /* @__PURE__ */ jsx(Button, {
        asChild: true,
        variant: "secondary",
        children: /* @__PURE__ */ jsxs(Link, {
          to: "/",
          children: [/* @__PURE__ */ jsx(ArrowLeft, {}), /* @__PURE__ */ jsx("span", {
            children: "Back to home"
          })]
        })
      })]
    });
  }
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("header", {
      className: "sticky top-0 bg-background py-2",
      children: /* @__PURE__ */ jsx(Button, {
        asChild: true,
        variant: "secondary",
        size: "icon",
        className: "size-8",
        children: /* @__PURE__ */ jsx(Link, {
          to: "/",
          children: /* @__PURE__ */ jsx(ArrowLeft, {})
        })
      })
    }), /* @__PURE__ */ jsxs("main", {
      className: "space-y-4 overflow-x-scroll",
      children: [!!space2.images?.length && /* @__PURE__ */ jsx("img", {
        src: space2.images[0].url,
        alt: space2.name,
        className: "w-full h-auto rounded-xl overflow-hidden aspect-video object-cover bg-sidebar"
      }), /* @__PURE__ */ jsxs("div", {
        className: "space-y-2",
        children: [/* @__PURE__ */ jsx(Badge, {
          variant: "secondary",
          className: "capitalize",
          children: space2.type
        }), /* @__PURE__ */ jsx("h2", {
          className: "text-lg font-semibold",
          children: space2.name
        }), /* @__PURE__ */ jsx("p", {
          className: "leading-7 text-muted-foreground",
          children: space2.description
        }), /* @__PURE__ */ jsxs("span", {
          className: "text-muted-foreground text-xs",
          children: [/* @__PURE__ */ jsx(Layers, {
            className: "inline-block mr-1",
            size: 12
          }), " ", space2.floor.name]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex gap-2",
        children: space2.links?.map((link) => /* @__PURE__ */ jsx(Button, {
          asChild: true,
          variant: "default",
          size: "sm",
          children: /* @__PURE__ */ jsxs("a", {
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            children: [link.name, /* @__PURE__ */ jsx(ExternalLink, {})]
          })
        }, link.id))
      })]
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: space
}, Symbol.toStringTag, { value: "Module" }));
function LocationSelector({
  location,
  onLocationSelect
}) {
  const { mapData } = useMap();
  const floors = mapData.getByType("floor").sort((a, b) => a.elevation - b.elevation);
  const spaces = mapData.getByType("space").filter(({ name }) => name.length);
  const spacesPerFloor = floors.map((floor) => ({
    floor,
    spaces: spaces.filter((space2) => space2.floor.id === floor.id).sort((a, b) => a.name.localeCompare(b.name))
  }));
  const [spaceId, setSpaceId] = useState(
    location?.__type === "space" ? location.id : " "
  );
  const [coordinate, setCoordinate] = useState(
    location?.__type === "coordinate" ? location : void 0
  );
  function handleSpaceSelect(spaceId2) {
    setSpaceId(spaceId2);
    setCoordinate(void 0);
    const space2 = spaces.find(({ id }) => id === spaceId2);
    if (space2) onLocationSelect(space2);
  }
  const [clickSelectEnabled, setClickSelectEnabled] = useState(false);
  useEvent("click", ({ spaces: spaces2, coordinate: coordinate2 }) => {
    if (clickSelectEnabled) {
      if (spaces2.length) {
        handleSpaceSelect(spaces2[0].id);
      } else {
        setSpaceId(" ");
        setCoordinate(coordinate2);
        onLocationSelect(coordinate2);
      }
      setClickSelectEnabled(false);
    }
  });
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full *:min-w-0", children: [
    /* @__PURE__ */ jsxs(Select, { value: spaceId, onValueChange: handleSpaceSelect, children: [
      /* @__PURE__ */ jsx(SelectTrigger, { className: "grow", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a space", className: "truncate", children: coordinate ? coordinate.latitude + " " + coordinate.longitude : spaces.find(({ id }) => id === spaceId)?.name }) }),
      /* @__PURE__ */ jsx(SelectContent, { children: spacesPerFloor.map(({ floor, spaces: spaces2 }) => /* @__PURE__ */ jsxs(SelectGroup, { children: [
        /* @__PURE__ */ jsx(SelectLabel, { children: floor.name }),
        spaces2.map((space2) => /* @__PURE__ */ jsx(SelectItem, { value: space2.id, children: space2.name }, space2.id))
      ] }, floor.id)) })
    ] }),
    /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "size-8 shrink-0",
          onClick: () => setClickSelectEnabled(!clickSelectEnabled),
          children: clickSelectEnabled ? /* @__PURE__ */ jsx(LocateOff, {}) : /* @__PURE__ */ jsx(Locate, {})
        }
      ) }),
      /* @__PURE__ */ jsx(TooltipContent, { side: "right", children: "Select on map" })
    ] })
  ] });
}
const navigation = UNSAFE_withComponentProps(function Navigation2() {
  const {
    mapData,
    mapView
  } = useMap();
  const {
    navigationFrom,
    setNavigationFrom,
    navigationTo,
    setNavigationTo
  } = useContext(AppContext);
  useEffect(() => {
    if (navigationFrom && navigationTo) {
      const directions = mapData.getDirections(navigationFrom, navigationTo);
      if (!directions) return;
      mapView.Navigation.clear();
      mapView.Navigation.draw(directions);
    }
  }, [navigationFrom, navigationTo, mapData, mapView.Navigation]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(PageHeader, {
      title: "Navigation"
    }), /* @__PURE__ */ jsxs("div", {
      className: "space-y-2 py-2",
      children: [/* @__PURE__ */ jsx(LocationSelector, {
        location: navigationFrom,
        onLocationSelect: setNavigationFrom
      }), /* @__PURE__ */ jsx(LocationSelector, {
        location: navigationTo,
        onLocationSelect: setNavigationTo
      })]
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: navigation
}, Symbol.toStringTag, { value: "Module" }));
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function DemoCard({
  title,
  description,
  defaultEnabled = false,
  onEnabled,
  disabled,
  children
}) {
  const [enabled, setEnabled] = useState(defaultEnabled);
  const onCheckedChange = (checked) => {
    setEnabled(checked);
    onEnabled(checked);
  };
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: `${enabled ? "ring-2 ring-primary ring-inset" : ""} shadow-none`,
      children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { className: disabled ? "opacity-50" : "", children: title }),
          description && /* @__PURE__ */ jsx(CardDescription, { className: disabled ? "opacity-50" : "", children: description }),
          /* @__PURE__ */ jsx(CardAction, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              Switch,
              {
                checked: enabled,
                onCheckedChange,
                disabled: !!disabled
              }
            ) }) }),
            /* @__PURE__ */ jsx(TooltipContent, { side: "right", children: disabled ? /* @__PURE__ */ jsxs(Fragment, { children: [
              "Not available",
              /* @__PURE__ */ jsx("p", { className: "text-[0.625rem]", children: disabled })
            ] }) : enabled ? "Turn demo off" : "Turn demo on" })
          ] }) })
        ] }),
        enabled && children && /* @__PURE__ */ jsx(CardContent, { className: "space-y-2", children })
      ]
    }
  );
}
function interpolateColors(color1, color2, factor) {
  const hex = (c) => parseInt(c.replace("#", ""), 16);
  const r1 = hex(color1) >> 16 & 255;
  const g1 = hex(color1) >> 8 & 255;
  const b1 = hex(color1) & 255;
  const r2 = hex(color2) >> 16 & 255;
  const g2 = hex(color2) >> 8 & 255;
  const b2 = hex(color2) & 255;
  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);
  return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
}
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ProgressPrimitive.Root,
    {
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        ProgressPrimitive.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
const COLOR1 = "#fff4e6";
const COLOR2 = "#ff7c43";
function StackedFloorsDemo$1() {
  const { mapData, mapView } = useMap();
  const isEnabled = useRef(false);
  const defaultStates = useRef({});
  useEffect(() => {
    defaultStates.current = mapData.getByType("space").reduce(
      (acc, space2) => {
        const state = mapView.getState(space2);
        if (state) acc[space2.id] = state;
        return acc;
      },
      {}
    );
  }, [mapData, mapView]);
  const [timestamp, setTimestamp] = useState(13.5);
  function updateSpaceColors(enabled) {
    isEnabled.current = enabled;
    if (!enabled) {
      setIsPlaying(false);
      setHeatmapSpaceId(void 0);
    }
    mapData.getByType("space").forEach((space2) => {
      const color = enabled ? interpolateColors(
        COLOR1,
        COLOR2,
        perlinNoise1D(space2.id, timestamp * 3)
      ) : defaultStates.current[space2.id]?.color || "white";
      const hoverColor = enabled ? color : defaultStates.current[space2.id]?.hoverColor || "lightgrey";
      mapView.updateState(space2, { color, hoverColor });
    });
  }
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timestamp == 24) {
        setIsPlaying(false);
      } else if (isPlaying) {
        setTimestamp((current) => current + 0.5);
        updateSpaceColors(true);
      }
    }, 250);
    return () => clearInterval(interval);
  });
  const handlePauseToggle = () => {
    if (timestamp == 24) setTimestamp(0);
    setIsPlaying(!isPlaying);
  };
  const { setHeatmapSpaceId } = useContext(AppContext);
  useEvent("click", ({ spaces }) => {
    if (isEnabled.current && spaces.length) {
      setHeatmapSpaceId(spaces[0].id);
    }
  });
  return /* @__PURE__ */ jsxs(
    DemoCard,
    {
      title: "Heatmap",
      description: "Show a heatmap overlay on the map",
      onEnabled: updateSpaceColors,
      defaultEnabled: isEnabled.current,
      children: [
        /* @__PURE__ */ jsx(Progress, { value: timestamp / 0.24 }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handlePauseToggle,
              variant: "ghost",
              size: "icon",
              className: "size-8",
              children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : timestamp == 24 ? /* @__PURE__ */ jsx(RotateCcw, {}) : /* @__PURE__ */ jsx(Play, {})
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: formatTime(timestamp) })
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx(
            Info,
            {
              size: "14",
              className: "inline align-middle mr-1 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsx("i", { className: "text-muted-foreground text-xs", children: "Click on a space to show its daycurve." })
        ] })
      ]
    }
  );
}
function StackedFloorsDemo() {
  const { mapData, mapView } = useMap();
  function onEnabled(enabled) {
    if (!mapView) return;
    if (enabled) {
      mapView.StackedMaps.expand({ distanceBetweenFloors: "auto" });
    } else {
      mapView.StackedMaps.collapse();
    }
  }
  const numberOfFloors = mapData.getByType("floor").length;
  return /* @__PURE__ */ jsx(
    DemoCard,
    {
      title: "Stacked floors",
      description: "Show all floors on top of eachother",
      defaultEnabled: mapView.StackedMaps.state === "expanded",
      onEnabled,
      disabled: numberOfFloors < 2 ? "Choose a different map with multiple floors." : void 0
    }
  );
}
const demos = UNSAFE_withComponentProps(function Demos() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(PageHeader, {
      title: "Demos"
    }), /* @__PURE__ */ jsxs("div", {
      className: "space-y-2",
      children: [/* @__PURE__ */ jsx(StackedFloorsDemo, {}), /* @__PURE__ */ jsx(StackedFloorsDemo$1, {})]
    })]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: demos
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Ca8LMl5q.js", "imports": ["/assets/chunk-C37GKA54-Cea7C6Y9.js", "/assets/index-Ctv2K4ti.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-F-uyaj2C.js", "imports": ["/assets/chunk-C37GKA54-Cea7C6Y9.js", "/assets/index-Ctv2K4ti.js"], "css": ["/assets/root-Bo4yrL7A.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/layout": { "id": "routes/layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/layout--BAWSdF-.js", "imports": ["/assets/chunk-C37GKA54-Cea7C6Y9.js", "/assets/index-DfcVe7ae.js", "/assets/select-BEBrtXCQ.js", "/assets/tooltip-DUEL9n3J.js", "/assets/AppContext-BLNfiFX6.js", "/assets/card--JsHpynf.js", "/assets/button-DJetx3yc.js", "/assets/sidebar-aRGXjOKe.js", "/assets/index-Ctv2K4ti.js", "/assets/Combination-D9nqUL6g.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/info": { "id": "routes/info", "parentId": "routes/layout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/info-BBHZYGSM.js", "imports": ["/assets/chunk-C37GKA54-Cea7C6Y9.js", "/assets/index-DfcVe7ae.js", "/assets/sidebar-aRGXjOKe.js", "/assets/tooltip-DUEL9n3J.js", "/assets/Combination-D9nqUL6g.js", "/assets/use-click-navigation-Cyl6e6dP.js", "/assets/PageHeader-Bap54-zD.js", "/assets/index-Ctv2K4ti.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/space": { "id": "routes/space", "parentId": "routes/layout", "path": "/space/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/space-DXrEBrwI.js", "imports": ["/assets/chunk-C37GKA54-Cea7C6Y9.js", "/assets/index-DfcVe7ae.js", "/assets/button-DJetx3yc.js", "/assets/use-click-navigation-Cyl6e6dP.js", "/assets/index-Ctv2K4ti.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/navigation": { "id": "routes/navigation", "parentId": "routes/layout", "path": "/navigation", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/navigation-HkyW43Uc.js", "imports": ["/assets/chunk-C37GKA54-Cea7C6Y9.js", "/assets/select-BEBrtXCQ.js", "/assets/index-DfcVe7ae.js", "/assets/button-DJetx3yc.js", "/assets/tooltip-DUEL9n3J.js", "/assets/PageHeader-Bap54-zD.js", "/assets/AppContext-BLNfiFX6.js", "/assets/index-Ctv2K4ti.js", "/assets/Combination-D9nqUL6g.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/demos": { "id": "routes/demos", "parentId": "routes/layout", "path": "/demos", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/demos-BXTuq8et.js", "imports": ["/assets/chunk-C37GKA54-Cea7C6Y9.js", "/assets/index-DfcVe7ae.js", "/assets/card--JsHpynf.js", "/assets/tooltip-DUEL9n3J.js", "/assets/AppContext-BLNfiFX6.js", "/assets/button-DJetx3yc.js", "/assets/PageHeader-Bap54-zD.js", "/assets/index-Ctv2K4ti.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-cf42689b.js", "version": "cf42689b", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/layout": {
    id: "routes/layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/info": {
    id: "routes/info",
    parentId: "routes/layout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/space": {
    id: "routes/space",
    parentId: "routes/layout",
    path: "/space/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/navigation": {
    id: "routes/navigation",
    parentId: "routes/layout",
    path: "/navigation",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/demos": {
    id: "routes/demos",
    parentId: "routes/layout",
    path: "/demos",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
