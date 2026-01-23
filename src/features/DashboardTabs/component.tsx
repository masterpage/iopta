import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

export function DashboardTabs() {
  const [currentTab, setCurrentTab] = useState(0);
  const dashTabs: string[] = ["Funds", "Traders", "Allocations"];

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
