"use client";

import { Grid, GridProps } from "@mui/material";

interface StyledPageProps extends GridProps {
  fullBleed?: boolean;
}

export function StyledPage(props: StyledPageProps) {
  const { fullBleed, ...articleProps } = props;

  return (
    <Grid
      component="article"
      sx={{
        ...(fullBleed ? {} : { marginBottom: "4rem" }),
      }}
      {...articleProps}
    />
  );
}
