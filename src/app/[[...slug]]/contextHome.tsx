"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

import { DEFAULT_DASHTYPE } from "@/consts";
import { DashType } from "@/features";

export interface ContextHome {
  currentDashType: DashType;
  setCurrentDashType: Dispatch<SetStateAction<ContextHome["currentDashType"]>>;
}

interface HomeProviderProps {
  slugDashType?: DashType;
}

const ContextHome = createContext<ContextHome | null>(null);

export function HomeProvider(props: PropsWithChildren<HomeProviderProps>) {
  const { children, slugDashType } = props;

  const dashType: DashType | undefined =
    Object.values(DashType).find(
      (t) => t.toLowerCase() === slugDashType?.toLowerCase()
    ) ?? DEFAULT_DASHTYPE;

  const [currentDashType, setCurrentDashType] = useState<DashType>(dashType);
  const value: ContextHome = useMemo(
    () => ({ currentDashType, setCurrentDashType }),
    [currentDashType]
  );

  return <ContextHome.Provider {...{ value }}>{children}</ContextHome.Provider>;
}

export function useHomeContext() {
  const ctx = useContext(ContextHome);

  if (!ctx) {
    throw new Error("`useHomeContext` must be used inside `HomeProvider`");
  }

  return ctx;
}
