import { Button, CSSObject, useTheme } from "@mui/material";

import NextLink from "next/link";

import { EnvBadge } from "@/components/EnvBadge";
import { getSx } from "@/utils";

import { Device, Wording } from "./SvgBox";
import { IoptaLogoProps } from "./types";
import { useIoptaLogo } from "./useIoptaLogo";

export function IoptaLogo(props: Readonly<IoptaLogoProps>) {
  const {
    deviceOnly = false,
    envBadge = false,
    exclusion,
    href,
    resize,
    sx,
    variant = "mono",
    ...buttonProps
  } = props;
  const theme = useTheme();
  const {
    palette: { grey, mode },
  } = theme;
  const { exclusion: logoExclusion, geometry } = useIoptaLogo(resize);

  const greyColor = grey[mode === "light" ? 600 : 400];
  const fill = greyColor;
  const [exclusionTop, exclusionRight, exclusionBottom, exclusionLeft] =
    logoExclusion;
  let margin: CSSObject["margin"];

  switch (exclusion) {
    case "x":
      margin = `0 ${exclusionLeft}px 0 ${exclusionRight}px`;
      break;
    case "xy":
      margin = `${exclusionTop}px ${exclusionRight}px ${exclusionBottom}px ${exclusionLeft}px`;
      break;
    case "y":
      margin = `${exclusionTop}px 0 ${exclusionBottom}px`;
      break;
    default:
      margin = "unset";
  }

  const envBadgePosition: Record<
    "deviceOnly" | "full",
    Pick<CSSObject, "bottom" | "left" | "right" | "top">
  > = {
    deviceOnly: { left: 28, top: -8 },
    full: {
      bottom: 7,
      left: geometry.bg.width + 4,
    },
  };

  return (
    <Button
      {...(href
        ? {
            href,
            LinkComponent: NextLink,
            role: "link",
          }
        : {
            disabled: true,
            role: "img",
          })}
      disableElevation
      disableRipple
      {...buttonProps}
      sx={{
        ":hover": {
          backgroundColor: "unset",
        },
        ...getSx(sx, theme),
        ...(deviceOnly
          ? {
              height: geometry.device.height,
              width: geometry.device.width,
            }
          : geometry.bg),
        margin,
        minWidth: "unset",
        padding: "unset",
        position: "relative",
      }}
    >
      {!deviceOnly && (
        <Wording
          data-testid="wording"
          sx={{
            fill,
            overflow: "visible",
            position: "absolute",
            ...geometry.wording,
          }}
        />
      )}
      <Device
        sx={{
          fill,
          ...(deviceOnly
            ? {}
            : {
                position: "absolute",
              }),
          ...geometry.device,
        }}
        variant={variant}
      />
      <EnvBadge
        data-testid="env-badge"
        hidden={!envBadge}
        sx={{
          position: "absolute",
          ...envBadgePosition[deviceOnly ? "deviceOnly" : "full"],
        }}
      />
    </Button>
  );
}
