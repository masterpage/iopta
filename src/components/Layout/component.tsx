"use client";

import { PropsWithChildren } from "react";

import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";

import { Global } from "@emotion/react";
import { usePathname } from "next/navigation";

import { Footer, getAppTheme, globalStyles, Header } from "@/components";
import { usePaletteMode } from "@/utils";

interface LayoutProps {
  pageClass?: string;
}

export function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children, pageClass } = props;
  const paletteMode = usePaletteMode();
  const pathname = usePathname();
  const fullBleedPageUris: string[] = [
    "/",
    "/allocations",
    "/dealers",
    "/funds",
    "/market/monitor",
    "/market/watchlist",
  ];
  const isFullBleed = fullBleedPageUris.includes(pathname);
  const main = isFullBleed ? (
    children
  ) : (
    <Container component="main">
      <Grid data-view={pageClass} size={{ xs: 12 }}>
        {children}
      </Grid>
    </Container>
  );

  if (!paletteMode) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={getAppTheme(paletteMode)}>
        <CssBaseline />
        <Header />
        {main}
        <Footer />
      </ThemeProvider>
      <Global styles={globalStyles()} />
    </>
  );
}
