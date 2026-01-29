"use client";

import { Container, Grid } from "@mui/material";

import { StyledPage, gridSettings, ResponsiveGrid } from "@/components";
import { useContextUi } from "@/context";
import { getMarketDashboard } from "./widgets/getMarketDasboard";
import { useMemo } from "react";

export function Market() {
  const {
    market: { currentMarketType },
  } = useContextUi();

  const { cols, layouts, widgets } = useMemo(() => getMarketDashboard(currentMarketType), [currentMarketType]);

  return (
    <StyledPage fullBleed>
      <Container component="header">
        <Grid columnSpacing={4}>
          <Grid component="h1" {...gridSettings}>
            {currentMarketType}
          </Grid>
        </Grid>
      </Container>
      <ResponsiveGrid {...{ cols, layouts }}>{widgets}</ResponsiveGrid>
    </StyledPage>
  );
}
