import { BoxProps } from "@mui/material";
import { SortingColumn } from "@tanstack/react-table";

export interface SortIndicatorProps extends BoxProps {
  canSort: ReturnType<SortingColumn<unknown>["getCanSort"]>;
  isSorted: ReturnType<SortingColumn<unknown>["getIsSorted"]>;
}
