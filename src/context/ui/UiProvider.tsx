"use client";

import { createContext, PropsWithChildren, useMemo, useState } from "react";

import { MarketType, DashType, getDashName, getMarketName } from "@/features";
import { DEFAULT_DASHTYPE, DEFAULT_MARKETTYPE } from "@/app/consts";
import { type ContextUi, type UiProviderProps } from "./types";

export const UiContext = createContext<ContextUi | null>(null);

export function UiProvider(props: PropsWithChildren<UiProviderProps>) {
  const { children, slugDashType } = props;
  const dashType: DashType = getDashName(slugDashType) ?? DEFAULT_DASHTYPE;
  const marketType: MarketType =
    getMarketName(slugDashType) ?? DEFAULT_MARKETTYPE;

  const [currentDashType, setCurrentDashType] = useState<DashType>(dashType);
  const [currentMarketType, setCurrentMarketType] =
    useState<MarketType>(marketType);

  const value: ContextUi = useMemo(
    () => ({
      currentDashType,
      setCurrentDashType,
      market: { currentMarketType, setCurrentMarketType },
    }),
    [currentDashType]
  );

  return <UiContext.Provider {...{ value }}>{children}</UiContext.Provider>;
}
