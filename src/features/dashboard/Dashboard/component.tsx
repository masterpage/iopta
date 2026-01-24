import { Allocations } from "./Allocations";
import { Traders } from "./Traders";
import { Funds } from "./Funds";

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

  if (type === DashType.ALLOCATIONS) {
    return <Allocations />;
  }

  if (type === DashType.TRADERS) {
    return <Traders />;
  }

  return <Funds />;
}
