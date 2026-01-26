"use client";

import NextLink from "next/link";

import { Box, Tab, Tabs } from "@mui/material";

import { useHomeContext } from "@/app/[[...slug]]/contextHome";
import { dashTabs } from "@/consts";

export function DashboardTabs() {
  const { currentDashType, setCurrentDashType } = useHomeContext();
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
