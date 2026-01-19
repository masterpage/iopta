import { Link, LinkProps } from "@mui/material";

import { getSx, isTest } from "@/utils";

interface GitCommitHashProps extends LinkProps {
  abbreviated?: boolean;
}

export function GitCommitHash(props: GitCommitHashProps) {
  const { abbreviated = false, sx, ...linkProps } = props;
  const hash = isTest
    ? "0123456"
    : process.env.GIT_COMMIT_HASH.substring(0, abbreviated ? 7 : undefined);

  if (!hash) {
    return null;
  }

  return (
    <Link
      // TODO: Obtain Git's account and repo names.
      href={`https://www.github.com/masterpage/iopta/tree/${hash}`}
      sx={(theme) => {
        const {
          typography: { fontFamilyMono },
        } = theme;

        return {
          "--Link-underlineColor": "unset",
          color: "inherit",
          fontFamily: fontFamilyMono,
          fontVariantNumeric: "slashed-zero",
          ...getSx(sx, theme),
        };
      }}
      target="_blank"
      {...linkProps}
    >
      {hash}
    </Link>
  );
}
