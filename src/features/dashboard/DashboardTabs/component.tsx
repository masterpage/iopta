import { useEffect, useState } from "react";

import { Tab, Tabs, type TabsProps } from "@mui/material";

import { DashType } from "@/features";

export interface DashboardTabsProps extends Omit<TabsProps, "onChange"> {
  onChange?: (currentType: DashType) => void;
}

const dashTabs: DashType[] = [
  DashType.FUNDS,
  DashType.DEALERS,
  DashType.ALLOCATIONS,
];

export function DashboardTabs(props: DashboardTabsProps) {
  const { onChange } = props;
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    if (onChange) {
      const dashType = dashTabs[currentTab];
      onChange(dashType);
    }
  }, [currentTab]);

  return (
    <Tabs centered component="nav" value={currentTab}>
      {dashTabs.map((t, i) => {
        return (
          <Tab
            key={t}
            label={t}
            onClick={() => {
              setCurrentTab(i);
            }}
          />
        );
      })}
    </Tabs>
  );
}
