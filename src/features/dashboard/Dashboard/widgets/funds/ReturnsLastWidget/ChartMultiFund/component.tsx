import { Grid } from "@mui/material";

import { Chart } from "./Chart";
import { Legend } from "./Legend";

export function ChartMultiFund() {
  return (
    <Grid container columns={4} spacing="10px" sx={{ flex: 1 }}>
      <Grid component={Chart} size={{ md: 3, xs: 4 }} sx={{ height: "unset" }}>
        Chart
      </Grid>
      <Grid component={Legend} size={{ md: 1, xs: 4 }} sx={{ height: "unset" }}>
        Legend
      </Grid>
    </Grid>
  );
}
