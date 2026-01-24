import { type ButtonProps } from "@mui/material";

import { type UseIoptaLogoParams } from "./useIoptaLogo/types";

export interface IoptaLogoProps extends Omit<ButtonProps, "size" | "variant"> {
  deviceOnly?: boolean;
  /**
   * @default false
   */
  envBadge?: boolean;
  exclusion?: "x" | "xy" | "y";
  /**
   * Scales logo.
   * @default { scale: 1 }
   */
  resize?: UseIoptaLogoParams;
  /**
   * Sets logo color.
   * @default mono
   */
  variant?: IoptaLogoVariant;
}

export type IoptaLogoVariant = "mono";

export * from "./SvgBox/types";

export * from "./useIoptaLogo/types";
