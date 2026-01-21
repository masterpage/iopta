import { getSx, setAlphaColor } from "@/utils";
import { Box, BoxProps } from "@mui/material";
import type { ICellRendererParams } from "ag-grid-community";
import { deepOrange, green } from "@mui/material/colors";

type LozengeProps = BoxProps & ICellRendererParams["value"];

export function Lozenge(props: LozengeProps) {
  const { value, sx, ...boxProps } = props;

  return (
    <Box
      component="span"
      {...boxProps}
      sx={(theme) => {
        const {
          palette: { mode },
          typography: { fontFamilyMono },
        } = theme;
        const isLightMode = mode === "light";
        const isBuy = value === "BUY";
        const color = (isBuy ? green : deepOrange)[isLightMode ? 700 : 300];

        return {
          backgroundColor: setAlphaColor(color, 0.15),
          borderRadius: "1rem",
          color,
          fontFamily: fontFamilyMono,
          fontSize: "smaller",
          padding: "round(0.1875em, 1px) round(0.75em, 1px)",
          ...getSx(sx, theme),
        };
      }}
    >
      {value}
    </Box>
  );
}
