import { Grid } from "@mui/material";

import { MarketOverviewTile } from "./MarketOverviewTile";
import { useMarketOverviewMetrics } from "src/hooks";
import { Box, type BoxProps, type SxProps } from "@mui/system";

export function MarketOverview(props: BoxProps) {
  const commonGridProps: SxProps = {
    size: { xs: 4, sm: 2, md: 1 },
    height: 160,
  };
  const metrics = useMarketOverviewMetrics();

  return (
    <Box component="span" {...props}>
      <Grid columns={4} container spacing="20px">
        {metrics.map((metric) => (
          <Grid key={metric.id} {...commonGridProps}>
            <MarketOverviewTile {...metric} isVix={metric.id === "vix"} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
