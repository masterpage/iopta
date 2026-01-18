import { IdObject } from "@/lib/data/types";
import { EnvKey } from "@/utils";

declare global {
  interface ArrayConstructor {
    isArray(
      arg: ReadonlyArray<unknown> | unknown
    ): arg is ReadonlyArray<unknown>;
  }

  interface Window {
    /**
     * `true` if app is run in test mode.
     * The flag is pre-set by `baseTest.ts`
     */
    isTest: boolean;
  }

  declare namespace NodeJS {
    export interface ProcessEnv {
      readonly GIT_COMMIT_HASH: string;
      /**
       * Vercel-specific env variable, available during the build step.
       * @link https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
       */
      readonly NEXT_PUBLIC_SITE_URL: string | undefined;
      /**
       * Site URL in Dev
       */
      readonly NEXT_PUBLIC_VERCEL_ENV: EnvKey | undefined;
      /**
       * Site URL in Preview and Production
       */
      readonly NEXT_PUBLIC_VERCEL_URL: string;
      readonly NODE_ENV: EnvKey;
      readonly [key: NextProcessEnvKeys]: EnvKey | string;
    }

    type NextProcessEnvKeys = "NEXT_PUBLIC_VERCEL_ENV" | "NODE_ENV";
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    lg: true;
    md: true;
    mdUp: true;
    sm: true;
    smDown: true;
    xl: true;
    xs: true;
  }

  type GlobalFontVariantNumeric =
    | "inherit"
    | "initial"
    | "revert-layer"
    | "revert"
    | "unset";

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  type FontVariantNumeric =
    | "diagonal-fractions"
    | "lining-nums"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "proportional-nums"
    | "slashed-zero"
    | "stacked-fractions"
    | "tabular-nums"
    | GlobalFontVariantNumeric;

  interface CSSProperties {
    fontVariantNumeric: FontVariantNumeric[];
  }
}

declare module "node_modules/@mui/material/styles/createTypography" {
  interface FontStyle {
    fontFamilyMono?: React.CSSProperties["fontFamily"];
    fontFamilySerif?: React.CSSProperties["fontFamily"];
  }
}
