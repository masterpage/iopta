import { getSx, setAlphaColor } from "@/utils";
import { Box, BoxProps, Color, PaletteMode } from "@mui/material";
import type { ICellRendererParams } from "ag-grid-community";
import { grey } from "@mui/material/colors";

type MuiColorShade = keyof Color;

type MuiColor = Record<MuiColorShade, string>;

type LozengeColorMode = Record<PaletteMode, MuiColorShade>;

type LozengeOptionsColorMap<V extends string> = Record<V, MuiColor>;

interface LozengeOptions<V extends string = string> {
  /**
   * Sets MUI color shades for `dark` and `light` palette modes.
   * @default dark = 300, light = 700
   */
  colorMode?: LozengeColorMode;
  colorMap: LozengeOptionsColorMap<V>;
}

interface LozengeProps<V extends string>
  extends BoxProps,
    Pick<ICellRendererParams<any, V>, "value"> {
  options: LozengeOptions<V>;
}

export function Lozenge<V extends string = string>(props: LozengeProps<V>) {
  const { options, sx, value, ...boxProps } = props;
  const { colorMap, colorMode } = options;
  const { dark = 300, light = 700 } = colorMode || {};
  const valueColor = (value && colorMap[value]) ?? grey;

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
        const color = valueColor[isLightMode ? light : dark];

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
