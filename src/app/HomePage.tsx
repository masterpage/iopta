"use client";

import {
  type ResponsiveGridLayoutProps,
  ResponsiveGridLayout,
  useContainerWidth,
} from "react-grid-layout";

import { Placeholder } from "@/components/Placeholder";
import { Box, useTheme } from "@mui/material";
import { DashboardTabs } from "@/features";

export function HomePage() {
  const { breakpoints } = useTheme();
  const { mdUp, smDown, ...b } = breakpoints.values;
  const { width, containerRef } = useContainerWidth();
  const layouts: ResponsiveGridLayoutProps["layouts"] = {
    xl: [
      { i: "ReturnsTD", x: 0, y: 0, w: 9, h: 2 },
      { i: "Buy/Sell", x: 9, y: 0, w: 9, h: 2 },
      { i: "ReturnsLast", x: 0, y: 1, w: 8, h: 2 },
      { i: "EquityAndLeverage", x: 0, y: 2, w: 8, h: 2 },
      { i: "Categories", x: 8, y: 1, w: 10, h: 4 },
    ],
    lg: [
      { i: "ReturnsTD", x: 0, y: 0, w: 6, h: 2 },
      { i: "Buy/Sell", x: 6, y: 0, w: 6, h: 2 },
      { i: "ReturnsLast", x: 0, y: 1, w: 5, h: 2 },
      { i: "EquityAndLeverage", x: 0, y: 2, w: 5, h: 2 },
      { i: "Categories", x: 5, y: 1, w: 7, h: 4 },
    ],
    md: [
      { i: "ReturnsTD", x: 0, y: 0, w: 4, h: 2 },
      { i: "Buy/Sell", x: 5, y: 0, w: 4, h: 2 },
      { i: "ReturnsLast", x: 0, y: 1, w: 4, h: 2 },
      { i: "EquityAndLeverage", x: 0, y: 2, w: 4, h: 2 },
      { i: "Categories", x: 5, y: 1, w: 4, h: 4 },
    ],
    sm: [
      { i: "ReturnsTD", x: 0, y: 0, w: 4, h: 2 },
      { i: "Buy/Sell", x: 0, y: 1, w: 4, h: 2 },
      { i: "ReturnsLast", x: 0, y: 1, w: 2, h: 3 },
      { i: "EquityAndLeverage", x: 2, y: 1, w: 2, h: 3 },
      { i: "Categories", x: 0, y: 2, w: 5, h: 3 },
    ],
    xs: [
      { i: "ReturnsTD", x: 0, y: 0, w: 1, h: 2 },
      { i: "Buy/Sell", x: 0, y: 1, w: 1, h: 2 },
      { i: "ReturnsLast", x: 0, y: 2, w: 1, h: 2 },
      { i: "EquityAndLeverage", x: 0, y: 3, w: 1, h: 2 },
      { i: "Categories", x: 0, y: 4, w: 1, h: 2 },
    ],
  };

  return (
    <>
      <DashboardTabs />
      <Box ref={containerRef}>
        <ResponsiveGridLayout
          margin={[20, 20]}
          breakpoints={b}
          cols={{ xl: 18, lg: 12, md: 8, sm: 4, xs: 1 }}
          {...{ layouts, width }}
        >
          <Placeholder key="ReturnsTD">Returns MTD/YTD</Placeholder>
          <Placeholder key="Buy/Sell">Buy/Sell</Placeholder>
          <Placeholder key="ReturnsLast">Returns last 12mo</Placeholder>
          <Placeholder key="EquityAndLeverage">Equity and Leverage</Placeholder>
          <Placeholder key="Categories">Categories</Placeholder>
        </ResponsiveGridLayout>
      </Box>
    </>
  );
}
