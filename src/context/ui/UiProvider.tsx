"use client";

import { createContext, PropsWithChildren, useMemo, useState } from "react";

import { DashType } from "@/features";
import { DEFAULT_DASHTYPE } from "@/app/consts";
import { type ContextUi, UiProviderProps } from "./types";

export const UiContext = createContext<ContextUi | null>(null);

export function UiProvider(props: PropsWithChildren<UiProviderProps>) {
  const { children, slugDashType } = props;

  const dashType: DashType | undefined =
    Object.values(DashType).find(
      (t) => t.toLowerCase() === slugDashType?.toLowerCase()
    ) ?? DEFAULT_DASHTYPE;

  const [currentDashType, setCurrentDashType] = useState<DashType>(dashType);
  const value: ContextUi = useMemo(
    () => ({ currentDashType, setCurrentDashType }),
    [currentDashType]
  );

  return <UiContext.Provider {...{ value }}>{children}</UiContext.Provider>;
}
