import { Box, useTheme, decomposeColor } from "@mui/material";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

import "ag-grid-community/styles/ag-theme-quartz.css";

interface ThemedAgGridProps<TData = any> extends AgGridReactProps<TData> {}

export function ThemedAgGrid<TData = any>(props: ThemedAgGridProps<TData>) {
  const { ...agGridProps } = props;
  const {
    palette: {
      background: { paper },
      divider,
      mode,
      primary,
      text,
    },
    typography: { fontFamily, fontWeightBold },
    shape: { borderRadius },
  } = useTheme();
  const borderColor = divider;
  const colorHighlighted = primary.main;
  const isLightMode = mode === "light";

  return (
    <Box
      className={`ag-theme-quartz${isLightMode ? "" : "-dark"}`}
      sx={{
        "--ag-background-color": paper,
        "--ag-border-color": borderColor,
        "--ag-cell-text-color": text.primary,
        "--ag-font-family": fontFamily!,
        "--ag-header-background-color": paper,
        "--ag-header-foreground-color": primary.main,
        "--ag-header-row-border": `${text.secondary} solid 1px`,
        "--ag-range-selection-border-color": colorHighlighted,
        "--ag-row-hover-color": `rgba(${decomposeColor(
          colorHighlighted
        ).values.join(",")}, 0.1)`,
        "--ag-wrapper-border-radius": `${borderRadius}px`,
        ".ag-header-row": {
          fontWeight: fontWeightBold,
        },
      }}
    >
      <AgGridReact {...agGridProps} />
    </Box>
  );
}
