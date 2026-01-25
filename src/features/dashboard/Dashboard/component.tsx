import { useMemo } from "react";

import { useHomeContext } from "@/app/[[...slug]]/contextHome";
import { ResponsiveGrid } from "@/components";

import { getDashboard } from "./widgets";

export function Dashboard() {
  const { currentDashType } = useHomeContext();
  const { cols, layouts, widgets } = useMemo(
    () => getDashboard(currentDashType),
    [currentDashType]
  );

  return <ResponsiveGrid {...{ cols, layouts }}>{widgets}</ResponsiveGrid>;
}
