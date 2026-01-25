import { Tab, Tabs } from "@mui/material";

import { useHomeContext } from "@/app/[[...slug]]/contextHome";
import { DashType } from "@/features";

const dashTabs: DashType[] = [
  DashType.FUNDS,
  DashType.DEALERS,
  DashType.ALLOCATIONS,
];

export function DashboardTabs() {
  const { currentDashType, setCurrentDashType } = useHomeContext();

  return (
    <Tabs centered component="nav" value={dashTabs.indexOf(currentDashType)}>
      {dashTabs.map((t, i) => {
        return (
          <Tab
            key={t}
            label={t}
            onClick={() => {
              setCurrentDashType(dashTabs[i]);
            }}
          />
        );
      })}
    </Tabs>
  );
}
