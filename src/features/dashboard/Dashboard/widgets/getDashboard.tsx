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

interface GetDashboardReturn
  extends Pick<ResponsiveGridLayoutProps, "cols" | "layouts"> {
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
        { i: "Allocations", x: 0, y: 0, w: 18, h: 3 },
        { i: "Analytics", x: 0, y: 1, w: 18, h: 2 },
        { i: "HypotheticalTrades", x: 0, y: 2, w: 18, h: 2 },
      ],
      lg: [
        { i: "Allocations", x: 0, y: 0, w: 12, h: 3 },
        { i: "Analytics", x: 0, y: 1, w: 12, h: 2 },
        { i: "HypotheticalTrades", x: 0, y: 2, w: 12, h: 2 },
      ],
      md: [
        { i: "Allocations", x: 0, y: 0, w: 8, h: 3 },
        { i: "Analytics", x: 0, y: 1, w: 8, h: 2 },
        { i: "HypotheticalTrades", x: 0, y: 2, w: 8, h: 2 },
      ],
      sm: [
        { i: "Allocations", x: 0, y: 0, w: 4, h: 3 },
        { i: "Analytics", x: 0, y: 1, w: 4, h: 2 },
        { i: "HypotheticalTrades", x: 0, y: 2, w: 4, h: 2 },
      ],
      xs: [
        { i: "Allocations", x: 0, y: 0, w: 1, h: 3 },
        { i: "Analytics", x: 0, y: 0, w: 9, h: 2 },
        { i: "HypotheticalTrades", x: 0, y: 0, w: 9, h: 2 },
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
    widgets = [
      <ReturnsTD key="ReturnsTD" />,
      <BuySell key="Buy/Sell" />,
      <ReturnsLast key="ReturnsLast" />,
      <EquityAndLeverage key="EquityAndLeverage" />,
      <FirmCategories key="Categories" />,
    ];
  }

  if (dashType === DashType.DEALERS) {
    layouts = {
      xl: [
        { i: "DealersBuySell", x: 0, y: 0, w: 9, h: 2 },
        { i: "Liability", x: 9, y: 0, w: 9, h: 2 },
      ],
      lg: [
        { i: "DealersBuySell", x: 0, y: 0, w: 6, h: 2 },
        { i: "Liability", x: 6, y: 0, w: 6, h: 2 },
      ],
      md: [
        { i: "DealersBuySell", x: 0, y: 0, w: 4, h: 2 },
        { i: "Liability", x: 4, y: 0, w: 4, h: 2 },
      ],
      sm: [
        { i: "DealersBuySell", x: 0, y: 0, w: 4, h: 2 },
        { i: "Liability", x: 0, y: 1, w: 4, h: 3 },
      ],
      xs: [
        { i: "DealersBuySell", x: 0, y: 0, w: 1, h: 2 },
        { i: "Liability", x: 0, y: 1, w: 1, h: 2 },
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
