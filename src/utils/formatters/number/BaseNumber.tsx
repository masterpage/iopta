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
  fractionDigits?: number;
  unit?: BaseNumberUnit;
}

export interface BaseNumberProps extends Omit<BoxProps, "children"> {
  value: unknown;
  options?: BaseNumberOptions;
}

export function BaseNumber(props: BaseNumberProps) {
  const { options, value, ...boxProps } = props;
  const { fractionDigits = 2, unit } = options ?? {};
  const { name: unitName = null, position: unitPos = "after" } = unit ?? {};
  const theme = useTheme();
  const {
    palette: { text },
    typography: { fontFamilyMono },
  } = theme;

  const formattedNumber = Number(value).toFixed(fractionDigits);
  const children: ReactNode[] = [formattedNumber];

  if (unitName) {
    const Unit = (
      <Box
        component="span"
        key={unitName}
        sx={{ color: text.secondary, opacity: 0.75 }}
      >
        {decode(unitName)}
      </Box>
    );

    if (unitPos === "before") {
      children.unshift(Unit);
    } else {
      children.push(Unit);
    }
  }

  return (
    <Box
      component="span"
      data-testid="BaseNumber"
      sx={{
        fontFamily: fontFamilyMono,
        fontSize: "round(92%, 1px)",
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
