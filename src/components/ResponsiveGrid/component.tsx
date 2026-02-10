"use client";

import { Box } from "@mui/material";
import { ResponsiveGridLayout, useContainerWidth } from "react-grid-layout";

import { useViewportSize } from "@/hooks";

import { defaultRglProps } from "./consts";
import { reactGridLayout } from "./styles";
import { ResponsiveGridProps } from "./types";

export function ResponsiveGrid(props: ResponsiveGridProps) {
  const { width: viewportWidth } = useViewportSize();
  const { mounted } = useContainerWidth();
  const {
    children,
    width = viewportWidth,
    ...rglProps
  } = { ...defaultRglProps, ...props };

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
        {...{
          width,
          ...rglProps,
        }}
      >
        {children}
      </ResponsiveGridLayout>
    </Box>
  );
}
