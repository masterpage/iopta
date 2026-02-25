import { type ReactNode } from "react";
import { type ResponsiveGridLayoutProps } from "react-grid-layout";

import { DashType } from "@/features";
import {
  BuySellWidget,
  EquityAndLeverage,
  FirmCategories,
  FundsTiles,
  ReturnsLastWidget,
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
        {
          i: "FundsTiles",
          x: 4,
          y: 0,
          w: 10,
          ...getH(3),
          static: true,
        },
        { i: "ReturnsTD", x: 0, y: 1, w: 12, ...getH(10) },
        { i: "Buy/Sell", x: 12, y: 1, w: 6, ...getH(10) },
        { i: "ReturnsLast", x: 0, y: 2, w: 18, ...getH(10) },
        { i: "EquityAndLeverage", x: 0, y: 3, w: 9, h: 5 },
        { i: "Categories", x: 9, y: 2, w: 9, h: 10 },
      ],
      lg: [
        {
          i: "FundsTiles",
          x: 0,
          y: 0,
          w: 12,
          ...getH(3),
          static: true,
        },
        { i: "ReturnsTD", x: 0, y: 1, w: 12, ...getH(10) },
        { i: "ReturnsLast", x: 0, y: 2, w: 12, ...getH(10) },
        { i: "Buy/Sell", x: 0, y: 3, w: 6, h: 5 },
        { i: "EquityAndLeverage", x: 0, y: 4, w: 6, h: 5 },
        { i: "Categories", x: 6, y: 3, w: 6, h: 10 },
      ],
      md: [
        {
          i: "FundsTiles",
          x: 0,
          y: 0,
          w: 8,
          ...getH(3),
          static: true,
        },
        {
          i: "ReturnsTD",
          x: 0,
          y: 1,
          w: 8,
          ...getH(10),
        },
        { i: "ReturnsLast", x: 0, y: 2, w: 8, ...getH(10) },
        { i: "Buy/Sell", x: 0, y: 3, w: 4, ...getH(7) },
        { i: "EquityAndLeverage", x: 0, y: 4, w: 4, h: 5 },
        { i: "Categories", x: 5, y: 3, w: 4, h: 10 },
      ],
      sm: [
        {
          i: "FundsTiles",
          x: 0,
          y: 0,
          w: 4,
          ...getH(6.5),
          static: true,
        },
        { i: "ReturnsTD", x: 0, y: 1, w: 4, ...getH(10) },
        { i: "ReturnsLast", x: 0, y: 2, w: 4, ...getH(10) },
        { i: "Buy/Sell", x: 0, y: 3, w: 4, ...getH(7) },
        { i: "EquityAndLeverage", x: 2, y: 1, w: 4, h: 6 },
        { i: "Categories", x: 0, y: 4, w: 4, h: 6 },
      ],
      xs: [
        {
          i: "FundsTiles",
          x: 0,
          y: 0,
          w: 1,
          ...getH(6.5),
        },
        { i: "ReturnsTD", x: 0, y: 0, w: 1, ...getH(10) },
        { i: "Buy/Sell", x: 0, y: 1, w: 1, ...getH(7) },
        { i: "ReturnsLast", x: 0, y: 2, w: 1, ...getH(20) },
        { i: "EquityAndLeverage", x: 0, y: 3, w: 1, ...getH(10) },
        { i: "Categories", x: 0, y: 4, w: 1, ...getH(10) },
      ],
    };
    widgets = [
      <FundsTiles key="FundsTiles" />,
      <ReturnsTD key="ReturnsTD" />,
      <ReturnsLastWidget key="ReturnsLast" />,
      <BuySellWidget key="Buy/Sell" />,
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
