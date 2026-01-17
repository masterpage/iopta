import { PropsWithChildren } from "react";

import { Grid, GridProps } from "@mui/material";

export const gridSettings: GridProps = { size: { md: 9, sm: 12 } };

export function GridWrap(props: PropsWithChildren<GridProps>) {
  return (
    <Grid container spacing={4}>
      <Grid component="section" {...gridSettings} {...props} />
    </Grid>
  );
}
