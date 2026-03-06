import { ReactNode } from "react";

import { BaseNumberProps, defaultBaseNumberOptions } from "./BaseNumber";
import { Box, useTheme } from "@mui/material";

interface CurrencyNumberProps extends BaseNumberProps {
  scale?: number;
}

const DATA_TEST_ID = "CurrencyNumber";

/**
 * Formats given value into currency.
 * @param props
 * @returns
 */
export function CurrencyNumber(props: CurrencyNumberProps): ReactNode {
  const { options, scale = 1, value, ...boxProps } = props;
  const { fractionDigits } = { ...defaultBaseNumberOptions, ...options };
  const theme = useTheme();
  const {
    typography: { fontFamilyMono },
  } = theme;
  const numberValue = Number(value);
  const formattedParts = Intl.NumberFormat("en-US", {
    compactDisplay: "short",
    currency: "USD",
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
    notation: "compact",
    style: "currency",
  }).formatToParts(numberValue * scale);

  return (
    <Box
      component="span"
      data-testid={DATA_TEST_ID}
      sx={{
        color: "inherit",
        fontFamily: fontFamilyMono,
        fontSize: "round(92%, 1px)",
      }}
      {...boxProps}
    >
      {formattedParts.map((p) => {
        const { type, value } = p;

        if (type === "currency" || type === "compact") {
          return (
            <Box
              component="span"
              data-testid={`${DATA_TEST_ID}-${type}`}
              key={type}
              sx={{ color: "inherit", opacity: 0.5 }}
            >
              {value}
            </Box>
          );
        }

        return value;
      })}
    </Box>
  );
}
