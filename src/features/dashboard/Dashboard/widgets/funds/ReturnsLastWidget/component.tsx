"use client";

import { Widget, WidgetProps } from "@/components";
import { ChartMultiFund } from "./ChartMultiFund";

export function ReturnsLastWidget(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Returns" subTitle="Last 12mo">
      <ChartMultiFund />
    </Widget>
  );
}
