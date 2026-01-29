"use client";

import NextLink from "next/link";

import { Box, Tab, Tabs } from "@mui/material";

import { marketTabs, pages } from "@/consts";
import { useContextUi } from "@/context";

export function MarketTabs() {
  const {
    market: { currentMarketType, setCurrentMarketType },
  } = useContextUi();
  const marketTabIndex = marketTabs.indexOf(currentMarketType);

  return (
    <Tabs centered component="nav" value={marketTabIndex}>
      {marketTabs.map((marketTab) => {
        const { uri } = pages.find((p) => p.label === "Market") ?? {};
        const href = `${uri}${marketTab ? `/${marketTab.toLowerCase()}` : ""}`;
        const isCurrentMarketType = currentMarketType === marketTab;

        return (
          <Tab
            key={marketTab}
            disableTouchRipple={isCurrentMarketType}
            {...(isCurrentMarketType ? {} : { href })}
            label={marketTab}
            LinkComponent={isCurrentMarketType ? Box : NextLink}
            onClick={() => {
              setCurrentMarketType(marketTab);
            }}
            sx={{
              ...(isCurrentMarketType ? { cursor: "default" } : {}),
            }}
          />
        );
      })}
    </Tabs>
  );
}
