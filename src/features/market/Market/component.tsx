"use client";

import { Container, Grid } from "@mui/material";

import { StyledPage, gridSettings, Placeholder } from "@/components";
import { useContextUi } from "@/context";

export function Market() {
  const {
    market: { currentMarketType },
  } = useContextUi();

  return (
    <StyledPage fullBleed>
      <Container component="header">
        <Grid columnSpacing={4}>
          <Grid component="h1" {...gridSettings}>
            {currentMarketType}
          </Grid>
        </Grid>
      </Container>
      <Grid component="main" container spacing={4}>
        <Grid size={12}>
          <Placeholder>{currentMarketType} placeholder</Placeholder>
        </Grid>
      </Grid>
    </StyledPage>
  );
}
