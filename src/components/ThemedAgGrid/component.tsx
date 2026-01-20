import { Box, useTheme } from "@mui/material";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

import "ag-grid-community/styles/ag-theme-quartz.css";

interface ThemedAgGridProps<TData = any> extends AgGridReactProps<TData> {}

export function ThemedAgGrid<TData = any>(props: ThemedAgGridProps<TData>) {
  const { ...agGridProps } = props;
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Box className={`ag-theme-quartz${mode === "light" ? "" : "-dark"}`}>
      <AgGridReact {...agGridProps} />
    </Box>
  );
}
