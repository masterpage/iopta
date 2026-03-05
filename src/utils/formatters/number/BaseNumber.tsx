import { ReactNode } from "react";

import { Box, BoxProps, useTheme } from "@mui/material";
import { decode } from "html-entities";

export interface BaseNumberUnit {
  /**
   * Unit char or abbreviation. Accepts an HTML entity.
   */
  name: string;
  /**
   * @default after
   */
  position?: "after" | "before";
}

export interface BaseNumberOptions {
  coloredPositiveNegative?: boolean;
  fractionDigits?: number;
  unit?: BaseNumberUnit;
}

export interface BaseNumberProps extends Omit<BoxProps, "children"> {
  value: unknown;
  options?: BaseNumberOptions;
}

export const defaultBaseNumberOptions: Required<
  Pick<BaseNumberOptions, "coloredPositiveNegative" | "fractionDigits">
> = {
  coloredPositiveNegative: false,
  fractionDigits: 2,
};

export function BaseNumber(props: BaseNumberProps) {
  const { options, value, ...boxProps } = props;
  const { coloredPositiveNegative, fractionDigits, unit } = {
    ...defaultBaseNumberOptions,
    ...options,
  };
  const { name: unitName = null, position: unitPos = "after" } = unit ?? {};
  const theme = useTheme();
  const {
    palette: { error, success },
    typography: { fontFamilyMono },
  } = theme;

  const number = Number(value);
  const formattedNumber = number.toFixed(fractionDigits);
  const children: ReactNode[] = [formattedNumber];

  if (unitName) {
    const Unit = (
      <Box
        component="span"
        key={unitName}
        sx={{ color: "inherit", opacity: 0.5 }}
      >
        {decode(unitName)}
      </Box>
    );

    children[unitPos === "before" ? "unshift" : "push"](Unit);
  }

  const numberColor = number > 0 ? success.main : error.main;
  const color = coloredPositiveNegative ? numberColor : "inherited";

  return (
    <Box
      component="span"
      data-testid="BaseNumber"
      sx={{
        color,
        fontFamily: fontFamilyMono,
        fontSize: "round(92%, 1px)",
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
