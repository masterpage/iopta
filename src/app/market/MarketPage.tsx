"use client";

import { Box, Grid } from "@mui/material";

import { setAlphaColor } from "@/utils";

import { pink } from "@mui/material/colors";
import { gridSettings } from "@/components/GridWrap";
import { StyledPage } from "@/components/StyledPage";

export default function ContactPage() {
  const color = pink[100];

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
        <Box
          sx={{
            height: "500px",
            background: setAlphaColor(color, 0.2),
            color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${color}`,
          }}
        >
          <Box>Market placeholder</Box>
        </Box>
      </main>
    </StyledPage>
  );
}
