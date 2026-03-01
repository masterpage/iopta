"use client";

import { Widget, WidgetProps } from "@/components";

import { ChartEquityAndLeverage } from "./ChartEquityAndLeverage";

export function EquityAndLeverageWidget(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Equity and Leverage" subTitle="Last 12mo">
      <ChartEquityAndLeverage />
    </Widget>
  );
}
