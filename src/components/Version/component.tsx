import { Box, BoxProps } from "@mui/material";

import { EnvBadge } from "@/components/EnvBadge";
import { getSx, isTest } from "@/utils";

import { GitCommitHash } from "../GitCommitHash";

interface VersionProps extends BoxProps {
  /**
   * Show/hide environment badge.
   * @default false
   */
  isEnv?: boolean;
  /**
   * Show/hide version number.
   * @default true
   */
  isVersion?: boolean;
}

export function Version(props: VersionProps) {
  const { isEnv = false, isVersion = false, sx, ...boxProps } = props;
  const version = `v${isTest ? "0.0.0" : process.env.NEXT_PUBLIC_APP_VERSION}`;

  if (!isVersion) return <EnvBadge />;

  return (
    <Box
      data-testid="Version"
      sx={(theme) => {
        const {
          palette: { text },
        } = theme;

        return {
          color: text.secondary,
          fontSize: "0.6875em",
          fontVariantNumeric: "slashed-zero",
          whiteSpace: "nowrap",
          ...getSx(sx, theme),
        };
      }}
      {...boxProps}
    >
      {version} <GitCommitHash abbreviated sx={{ fontSize: "0.875em" }} />{" "}
      <EnvBadge hidden={!isEnv} sx={{ fontSize: "0.875em" }} />
    </Box>
  );
}
