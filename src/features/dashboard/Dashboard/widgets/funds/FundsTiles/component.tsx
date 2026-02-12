import { Box, BoxProps, Grid, SxProps } from "@mui/material";

import { Tile } from "@/components";
import { dataReturnsTD } from "../ReturnsTD";
import { BaseNumber } from "@/utils";

const rows = 8;
const ccy = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 2,
  notation: "compact",
  style: "currency",
});
const { avgLeverage, totalAum } = dataReturnsTD
  .slice(0, rows)
  .reduce<{ avgLeverage: number; totalAum: number }>(
    (acc, curr, i) => {
      const { aum, leverage } = curr;
      const isLastRow = i === rows - 1;

      acc = {
        avgLeverage: acc.avgLeverage + leverage,
        totalAum: acc.totalAum + aum,
      };

      if (isLastRow) {
        return {
          ...acc,
          avgLeverage: acc.avgLeverage / rows,
        };
      }

      return acc;
    },
    { avgLeverage: 0, totalAum: 0 },
  );

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
          footer={`Across ${rows} shown funds`}
          header="Total AUM"
          {...commonGridProps}
        >
          {ccy.format(totalAum)}
        </Grid>
        <Grid
          component={Tile}
          footer="$505.9m YTD"
          header="Daily P&L"
          {...commonGridProps}
        >
          {ccy.format(24200000)}
        </Grid>
        <Grid
          component={Tile}
          footer={`Across ${rows} shown funds`}
          header="Avg. Leverage"
          {...commonGridProps}
        >
          <BaseNumber
            sx={{
              fontFamily: "inherit",
            }}
            value={avgLeverage}
            options={{ fractionDigits: 2, unit: { name: "&times;" } }}
          />
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
