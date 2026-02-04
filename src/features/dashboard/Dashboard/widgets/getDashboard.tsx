import { type ReactNode } from "react";
import { type ResponsiveGridLayoutProps } from "react-grid-layout";

import { DashType } from "@/features";
import {
  BuySell,
  EquityAndLeverage,
  FirmCategories,
  ReturnsLast,
  ReturnsTD,
} from "./funds";
import { Allocations, Analytics, HypoTrades } from "./allocations";
import { DealersBuySell, Liability } from "./dealers";
import { getH } from "@/components";

interface GetDashboardReturn extends Pick<
  ResponsiveGridLayoutProps,
  "cols" | "layouts"
> {
  widgets: ReactNode;
}

export function getDashboard(dashType: DashType): GetDashboardReturn {
  const cols: ResponsiveGridLayoutProps["cols"] = {
    xl: 18,
    lg: 12,
    md: 8,
    sm: 4,
    xs: 1,
  };
  let layouts: ResponsiveGridLayoutProps["layouts"];
  let widgets: ReactNode;

  if (dashType === DashType.ALLOCATIONS) {
    layouts = {
      xl: [
        { i: "Allocations", x: 0, y: 0, w: 18, h: 6 },
        { i: "Analytics", x: 0, y: 1, w: 18, h: 5 },
        { i: "HypotheticalTrades", x: 0, y: 2, w: 18, h: 5 },
      ],
      lg: [
        { i: "Allocations", x: 0, y: 0, w: 12, h: 6 },
        { i: "Analytics", x: 0, y: 1, w: 12, h: 5 },
        { i: "HypotheticalTrades", x: 0, y: 2, w: 12, h: 5 },
      ],
      md: [
        { i: "Allocations", x: 0, y: 0, w: 8, h: 6 },
        { i: "Analytics", x: 0, y: 1, w: 8, h: 5 },
        { i: "HypotheticalTrades", x: 0, y: 2, w: 8, h: 5 },
      ],
      sm: [
        { i: "Allocations", x: 0, y: 0, w: 4, h: 6 },
        { i: "Analytics", x: 0, y: 1, w: 4, h: 5 },
        { i: "HypotheticalTrades", x: 0, y: 2, w: 4, h: 5 },
      ],
      xs: [
        { i: "Allocations", x: 0, y: 0, w: 1, h: 6 },
        { i: "Analytics", x: 0, y: 0, w: 9, h: 5 },
        { i: "HypotheticalTrades", x: 0, y: 0, w: 9, h: 5 },
      ],
    };
    widgets = [
      <Allocations key="Allocations" />,
      <Analytics key="Analytics" />,
      <HypoTrades key="HypotheticalTrades" />,
    ];
  }

  if (dashType === DashType.FUNDS) {
    layouts = {
      xl: [
        { i: "ReturnsTD", x: 0, y: 0, w: 9, ...getH(10) },
        { i: "Buy/Sell", x: 9, y: 0, w: 9, ...getH(10) },
        { i: "ReturnsLast", x: 0, y: 1, w: 8, h: 5 },
        { i: "EquityAndLeverage", x: 0, y: 2, w: 8, h: 5 },
        { i: "Categories", x: 8, y: 1, w: 10, h: 10 },
      ],
      lg: [
        { i: "ReturnsTD", x: 0, y: 0, w: 12, ...getH(10) },
        { i: "ReturnsLast", x: 0, y: 1, w: 12, ...getH(10) },
        { i: "Buy/Sell", x: 0, y: 2, w: 5, h: 5 },
        { i: "EquityAndLeverage", x: 0, y: 3, w: 5, h: 5 },
        { i: "Categories", x: 5, y: 2, w: 7, h: 10 },
      ],
      md: [
        {
          i: "ReturnsTD",
          x: 0,
          y: 0,
          w: 8,
          ...getH(10),
        },
        { i: "ReturnsLast", x: 0, y: 1, w: 8, ...getH(10) },
        { i: "Buy/Sell", x: 0, y: 2, w: 4, h: 5 },
        { i: "EquityAndLeverage", x: 0, y: 3, w: 4, h: 5 },
        { i: "Categories", x: 5, y: 2, w: 4, h: 10 },
      ],
      sm: [
        { i: "ReturnsTD", x: 0, y: 0, w: 8, ...getH(10) },
        { i: "Buy/Sell", x: 0, y: 1, w: 8, ...getH(10) },
        { i: "ReturnsLast", x: 0, y: 2, w: 2, h: 6 },
        { i: "EquityAndLeverage", x: 2, y: 2, w: 2, h: 6 },
        { i: "Categories", x: 0, y: 3, w: 5, h: 6 },
      ],
      xs: [
        { i: "ReturnsTD", x: 0, y: 0, w: 1, ...getH(10) },
        { i: "Buy/Sell", x: 0, y: 1, w: 1, ...getH(10) },
        { i: "ReturnsLast", x: 0, y: 2, w: 1, h: 4 },
        { i: "EquityAndLeverage", x: 0, y: 3, w: 1, h: 4 },
        { i: "Categories", x: 0, y: 4, w: 1, h: 4 },
      ],
    };
    widgets = [
      <ReturnsTD key="ReturnsTD" />,
      <ReturnsLast key="ReturnsLast" />,
      <BuySell key="Buy/Sell" />,
      <EquityAndLeverage key="EquityAndLeverage" />,
      <FirmCategories key="Categories" />,
    ];
  }

  if (dashType === DashType.DEALERS) {
    layouts = {
      xl: [
        { i: "DealersBuySell", x: 0, y: 0, w: 9, h: 5 },
        { i: "Liability", x: 9, y: 0, w: 9, h: 5 },
      ],
      lg: [
        { i: "DealersBuySell", x: 0, y: 0, w: 6, h: 5 },
        { i: "Liability", x: 6, y: 0, w: 6, h: 5 },
      ],
      md: [
        { i: "DealersBuySell", x: 0, y: 0, w: 4, h: 5 },
        { i: "Liability", x: 4, y: 0, w: 4, h: 5 },
      ],
      sm: [
        { i: "DealersBuySell", x: 0, y: 0, w: 4, h: 5 },
        { i: "Liability", x: 0, y: 1, w: 4, h: 5 },
      ],
      xs: [
        { i: "DealersBuySell", x: 0, y: 0, w: 1, h: 5 },
        { i: "Liability", x: 0, y: 1, w: 1, h: 5 },
      ],
    };
    widgets = [
      <DealersBuySell key="DealersBuySell" />,
      <Liability key="Liability" />,
    ];
  }

  return {
    cols,
    layouts,
    widgets,
  };
}
