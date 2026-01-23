"use client";

import { Grid } from "@mui/material";

import { gridSettings } from "@/components/GridWrap";
import { StyledPage } from "@/components/StyledPage";
import { Placeholder } from "@/components/Placeholder";

export default function MarketPage() {
  return (
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
  );
}
