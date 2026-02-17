"use client";

import { Grid } from "@mui/material";

import { Placeholder, Widget, WidgetProps } from "@/components";

import { ChartMultiFund } from "./ChartMultiFund";

export function ReturnsLastWidget(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Returns" subTitle="Last 12mo">
      <Grid container columns={4} spacing="10px" sx={{ flex: 1 }}>
        <Grid
          component={ChartMultiFund}
          size={{ md: 3, xs: 4 }}
          sx={{ height: "unset" }}
        >
          Chart
        </Grid>
        <Grid
          component={Placeholder}
          size={{ md: 1, xs: 4 }}
          sx={{ height: "unset" }}
        >
          Legend
        </Grid>
      </Grid>
    </Widget>
  );
}
