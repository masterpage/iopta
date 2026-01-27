"use client";

import { Box, useTheme } from "@mui/material";
import {
  type ResponsiveGridLayoutProps,
  ResponsiveGridLayout,
  useContainerWidth,
} from "react-grid-layout";

import { useViewportSize } from "@/hooks";

import { reactGridLayout } from "./styles";

interface ResponsiveGridProps
  extends Omit<ResponsiveGridLayoutProps, "width">,
    Partial<Pick<ResponsiveGridLayoutProps, "width">> {}

export function ResponsiveGrid(props: ResponsiveGridProps) {
  const theme = useTheme();
  const { width: viewportWidth } = useViewportSize();
  const { mounted } = useContainerWidth();
  const {
    children,
    cols = { xl: 18, lg: 12, md: 8, sm: 4, xs: 1 },
    margin = {
      sm: [24, 24],
      xs: [16, 16],
    },
    width = viewportWidth,
    ...rglProps
  } = props;
  const { mdUp, smDown, ...breakpoints } = theme.breakpoints.values;

  if (!(mounted && width)) {
    return null;
  }

  return (
    <Box sx={reactGridLayout}>
      <ResponsiveGridLayout
        dragConfig={{
          cancel: ".no-drag, .MuiButtonBase-root, input, textarea, select",
          handle: ".widget-drag-handle",
        }}
        {...{ breakpoints, cols, margin, width, ...rglProps }}
      >
        {children}
      </ResponsiveGridLayout>
    </Box>
  );
}
