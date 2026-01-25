"use client";

import NextLink from "next/link";

import { Box, Tab, Tabs } from "@mui/material";

import { useHomeContext } from "@/app/[[...slug]]/contextHome";
import { DashType } from "@/features";

const dashTabs: DashType[] = [
  DashType.FUNDS,
  DashType.DEALERS,
  DashType.ALLOCATIONS,
];

export function DashboardTabs() {
  const { currentDashType } = useHomeContext();

  return (
    <Tabs centered component="nav" value={dashTabs.indexOf(currentDashType)}>
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
            sx={{
              ...(isCurrentDashType ? { cursor: "default" } : {}),
            }}
          />
        );
      })}
    </Tabs>
  );
}
