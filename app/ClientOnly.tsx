import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export function ClientOnly({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(typeof window !== "undefined");

  useEffect(() => setIsClient(true), []);

  return isClient ? <>{children}</> : null;
}
