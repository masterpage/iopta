import { Typography, TypographyProps } from "@mui/material";

import { CURRENT_ENV, getSx, isProd, smcp } from "@/utils";
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
        } = theme;
        const envColor = setEnvColor(CURRENT_ENV, mode);

        return {
          "> *": {
            display: "block",
            lineHeight: "round(down, 0.9em, 1px)",
            marginBottom: "round(0.1em, 1px)",
          },
          alignContent: "center",
          border: "round(0.1em, 1px) solid",
          borderRadius: "round(0.3em, 1px)",
          display: "inline-flex",
          fontSize: "inherit",
          letterSpacing: "initial",
          lineHeight: "1",
          padding: "0 round(0.2em, 1px)",
          userSelect: "none",
          wordBreak: "keep-all",
          ...envColor,
          ...getSx(sx, theme),
        };
      }}
      {...restProps}
    >
      {smcp(dictLabel)}
    </Typography>
  );
}
