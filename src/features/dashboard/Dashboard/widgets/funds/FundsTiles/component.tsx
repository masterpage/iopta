import { Box, BoxProps, Grid, SxProps } from "@mui/material";

import { Tile } from "@/components";

export function FundsTiles(props: BoxProps) {
  const commonGridProps: SxProps = {
    size: { xs: 2, sm: 2, md: 1 },
    height: 120,
  };

  return (
    <Box component="span" {...props}>
      <Grid columns={4} container spacing="20px">
        <Grid
          component={Tile}
          footer="$5b active funds"
          header="Total AUM"
          {...commonGridProps}
        >
          $6.95b
        </Grid>
        <Grid
          component={Tile}
          footer="$505.9m YTD"
          header="Daily P&L"
          {...commonGridProps}
        >
          $24.2m
        </Grid>
        <Grid
          component={Tile}
          footer="Across all funds"
          header="Avg. Leverage"
          {...commonGridProps}
        >
          2.42
        </Grid>
        <Grid
          component={Tile}
          footer="Suspended funds"
          header="At Risk"
          {...commonGridProps}
        >
          1
        </Grid>
      </Grid>
    </Box>
  );
}
