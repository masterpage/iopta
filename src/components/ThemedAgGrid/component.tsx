import { Box, useTheme, decomposeColor } from "@mui/material";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

import "ag-grid-community/styles/ag-theme-quartz.css";
import { GridOptions } from "ag-grid-community";

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
    typography: { fontFamily, fontFamilyMono, fontWeightBold },
    shape: { borderRadius },
  } = useTheme();
  const borderColor = divider;
  const colorHighlighted = primary.main;
  const isLightMode = mode === "light";
  const gridOptions: GridOptions<TData> = {
    dataTypeDefinitions: {
      currency: {
        baseDataType: "number",
        columnTypes: ["numericColumn"],
        extendsDataType: "number",
        valueFormatter: (p) =>
          p.value === null
            ? ""
            : Number(p.value).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              }),
        valueParser: (p) => {
          if (p.newValue == null || p.newValue === "") return null;

          const num = String(p.newValue).replace(/[^\d.-]/g, "");

          return num === "" ? null : Number(num);
        },
      },
    },
    defaultColDef: {
      cellClass: (params) =>
        params.colDef.cellDataType === "currency" ? "currency" : undefined,
      headerClass: (params) => {
        const cd = params.column?.getColDef();

        if (!cd) return;

        return cd.cellDataType === "currency"
          ? "ag-right-aligned-header"
          : undefined;
      },
    },
  };

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
        ".ag-cell.currency": {
          fontFamily: fontFamilyMono,
          fontSize: "small",
          textAlign: "right",
        },
        ".ag-header-row": {
          fontWeight: fontWeightBold,
        },
      }}
    >
      <AgGridReact {...{ gridOptions, ...agGridProps }} />
    </Box>
  );
}
