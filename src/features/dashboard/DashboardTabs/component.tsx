"use client";

import NextLink from "next/link";

import { Box, Tab, Tabs } from "@mui/material";

import { dashTabs } from "@/consts";
import { useContextUi } from "@/context";

export function DashboardTabs() {
  const { currentDashType, setCurrentDashType } = useContextUi();
  const dashTabIndex = dashTabs.indexOf(currentDashType);

  return (
    <Tabs centered component="nav" value={dashTabIndex}>
      {dashTabs.map((dashTab) => {
        const href = dashTab ? `/${dashTab.toLowerCase()}` : "";
        const isCurrentDashType = currentDashType === dashTab;

        return (
          <Tab
            key={dashTab}
            disableTouchRipple={isCurrentDashType}
            {...(isCurrentDashType ? {} : { href })}
            label={dashTab}
            LinkComponent={isCurrentDashType ? Box : NextLink}
            onClick={() => {
              setCurrentDashType(dashTab);
            }}
            sx={{
              ...(isCurrentDashType ? { cursor: "default" } : {}),
            }}
          />
        );
      })}
    </Tabs>
  );
}
