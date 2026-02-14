import type { ICellRendererParams } from "ag-grid-community";

import {
  Box,
  type BoxProps,
  type Color,
  type PaletteMode,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import { getSx, setAlphaColor } from "@/utils";

type LozengeColorMode = Record<PaletteMode, keyof Color>;

type LozengeOptionsColorMap<V extends string> = Record<V, Color | string>;

interface LozengeOptions<V extends string = string> {
  /**
   * Sets MUI color shades for `dark` and `light` palette modes.
   * @default dark = 300, light = 700
   */
  colorMode?: LozengeColorMode;
  colorMap: LozengeOptionsColorMap<V>;
  format?: (value: V | null | undefined) => string;
}

interface LozengeProps<V extends string>
  extends BoxProps, Pick<ICellRendererParams<any, V>, "value"> {
  options: LozengeOptions<V>;
}

export function Lozenge<V extends string = string>(props: LozengeProps<V>) {
  const { options, sx, value, ...boxProps } = props;
  const { colorMap, colorMode, format = (v) => v } = options;
  const formattedValue = format(value);

  return (
    <Box
      component="span"
      {...boxProps}
      sx={(theme) => {
        const {
          palette: { mode },
          typography: { fontFamilyMono },
        } = theme;
        const valueColor = (value && colorMap[value]) ?? grey;
        let color: string;

        if (typeof valueColor === "object") {
          const { dark = 300, light = 700 } = colorMode || {};

          color = valueColor[mode === "light" ? light : dark];
        } else {
          color = valueColor;
        }

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
      {formattedValue}
    </Box>
  );
}
