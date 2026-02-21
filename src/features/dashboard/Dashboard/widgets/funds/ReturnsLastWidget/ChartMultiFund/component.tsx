import { Grid } from "@mui/material";

import { Chart } from "./Chart";
import { Legend } from "./Legend";

export function ChartMultiFund() {
  return (
    <Grid container columns={4} spacing="10px" sx={{ flex: 1 }}>
      <Grid size={{ md: 3, sm: 2, xs: 4 }}>
        <Chart />
      </Grid>
      <Grid size={{ md: 1, sm: 2, xs: 4 }}>
        <Legend />
      </Grid>
    </Grid>
  );
}
