import { useMemo } from "react";

import { ResponsiveGrid } from "@/components";
import { useContextUi } from "@/context";

import { getDashboard } from "./widgets";

export function Dashboard() {
  const { currentDashType } = useContextUi();
  const { cols, layouts, widgets } = useMemo(
    () => getDashboard(currentDashType),
    [currentDashType]
  );

  return <ResponsiveGrid {...{ cols, layouts }}>{widgets}</ResponsiveGrid>;
}
