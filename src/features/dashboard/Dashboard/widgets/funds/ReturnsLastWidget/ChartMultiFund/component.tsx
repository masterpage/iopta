import { Grid } from "@mui/material";

import { Chart } from "./Chart";
import { Legend } from "./Legend";

export function ChartMultiFund() {
  return (
    <Grid
      container
      columns={12}
      spacing="10px"
      sx={({ breakpoints }) => ({
        flex: 1,
        [breakpoints.down("sm")]: { flexDirection: "column" },
      })}
    >
      <Grid
        size={{ lg: 9, md: 8, sm: 6, xs: 12 }}
        sx={{ flex: 1, minHeight: 0, minWidth: 0 }}
      >
        <Chart />
      </Grid>
      <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
        <Legend />
      </Grid>
    </Grid>
  );
}
