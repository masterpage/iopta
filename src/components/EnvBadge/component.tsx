import { Typography, TypographyProps } from "@mui/material";

import { CURRENT_ENV, getSx, isProd } from "@/utils";
import { setTestId } from "src/utils/tests";

import { dictLabel, setEnvColor } from "./helpers";

export const TESTID_ENVBADGE = "EnvBadge";

export function EnvBadge(props: Readonly<TypographyProps>) {
  if (isProd) return null;

  const testId = setTestId(TESTID_ENVBADGE, dictLabel);
  const { hidden, sx, ...restProps } = props;

  if (hidden) {
    return null;
  }

  return (
    <Typography
      component="span"
      data-testid={testId}
      sx={(theme) => {
        const {
          palette: { mode },
          typography: { fontFamilyMono, fontWeightBold },
        } = theme;
        const envColor = setEnvColor(CURRENT_ENV, mode);

        return {
          fontFamily: fontFamilyMono,
          fontSize: "inherit",
          fontWeight: fontWeightBold,
          letterSpacing: "initial",
          lineHeight: "1",
          userSelect: "none",
          wordBreak: "keep-all",
          ...envColor,
          ...getSx(sx, theme),
        };
      }}
      {...restProps}
    >
      {dictLabel}
    </Typography>
  );
}
