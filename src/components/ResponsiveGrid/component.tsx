"use client";

import { Box, useTheme } from "@mui/material";
import {
  type ResponsiveGridLayoutProps,
  ResponsiveGridLayout,
  useContainerWidth,
} from "react-grid-layout";

interface ResponsiveGridProps
  extends Omit<ResponsiveGridLayoutProps, "width">,
    Partial<Pick<ResponsiveGridLayoutProps, "width">> {}

export function ResponsiveGrid(props: ResponsiveGridProps) {
  const theme = useTheme();
  const { width: calculatedWidth, containerRef } = useContainerWidth();
  const {
    children,
    cols = { xl: 18, lg: 12, md: 8, sm: 4, xs: 1 },
    margin = [20, 20],
    width = calculatedWidth,
    ...rglProps
  } = props;
  const { mdUp, smDown, ...breakpoints } = theme.breakpoints.values;

  return (
    <Box ref={containerRef}>
      <ResponsiveGridLayout
        margin={[20, 20]}
        {...{ breakpoints, cols, width, ...rglProps }}
      >
        {children}
      </ResponsiveGridLayout>
    </Box>
  );
}
