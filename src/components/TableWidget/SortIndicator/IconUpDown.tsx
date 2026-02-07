import { type SVGProps } from "react";

import { type SortIndicatorProps } from "./types";
import { Box, type BoxProps, useTheme } from "@mui/material";

interface IconUpDownProps
  extends SVGProps<SVGSVGElement>, Pick<SortIndicatorProps, "isSorted"> {
  color?: SVGProps<SVGSVGElement>["stroke"];
}

export function IconUpDown(props: IconUpDownProps) {
  const theme = useTheme();
  const {
    palette: { primary },
  } = theme;
  const { color: stroke = primary.main, isSorted, ...restProps } = props;
  const sx: BoxProps["sx"] = {
    fill: "none",
    opacity: 0.25,
    stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "round(0.1875rem,1px)",
  };
  const isSortedAsc = isSorted === "asc";
  const isSortedDesc = isSorted === "desc";
  const activeSx: BoxProps["sx"] = {
    opacity: 1,
  };

  return (
    <svg
      version="1.1"
      viewBox="0 0 16 24"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <Box
        component="polyline"
        id="asc"
        points="1.5 8.5 8 1.5 14.5 8.5"
        sx={{ ...sx, ...(isSortedAsc ? activeSx : {}) }}
      />
      <Box
        component="polyline"
        id="desc"
        points="1.5 15.5 8 22.5 14.5 15.5"
        sx={{ ...sx, ...(isSortedDesc ? activeSx : {}) }}
      />
    </svg>
  );
}
