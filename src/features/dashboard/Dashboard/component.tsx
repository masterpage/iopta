import { ResponsiveGrid } from "@/components";
import { getDashboard } from "./widgets";
import { useMemo } from "react";

export enum DashType {
  "ALLOCATIONS" = "Allocations",
  "FUNDS" = "Funds",
  "TRADERS" = "Traders",
}

interface DashboardProps {
  /**
   * Dashboard type
   * @default 'funds'
   */
  type?: DashType;
}

export function Dashboard(props: DashboardProps) {
  const { type = DashType.FUNDS } = props;
  const { cols, layouts, widgets } = useMemo(() => getDashboard(type), [type]);

  return <ResponsiveGrid {...{ cols, layouts }}>{widgets}</ResponsiveGrid>;
}
