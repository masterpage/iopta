"use client";

import { Grid } from "@mui/material";

import { gridSettings, Placeholder, StyledPage } from "@/components";
import { MarketTabs } from "@/features";

export default function MarketPage() {
  return (
    <>
      <MarketTabs />
      <StyledPage>
        <header>
          <Grid columnSpacing={4}>
            <Grid component="h1" {...gridSettings}>
              Market
            </Grid>
          </Grid>
        </header>
        <main>
          <Placeholder>Market placeholder</Placeholder>
        </main>
      </StyledPage>
    </>
  );
}
