import { PaletteMode } from "@mui/material";
import { green, grey, orange, red } from "@mui/material/colors";

import { CSSObject } from "@emotion/react";

import { CURRENT_ENV, EnvKey } from "@/utils";

import { AllowedColor, EnvBadgeDictionary } from "./types";

export const envBadgeDictionary: EnvBadgeDictionary = {
  development: "DEV",
  preview: "STAGING",
  production: "PROD",
  test: "TEST",
};

export const dictLabel = envBadgeDictionary[CURRENT_ENV] || CURRENT_ENV;

function colorCssObject(color: string): CSSObject {
  return { borderColor: color, color };
}

export const envColorMap: Partial<Record<EnvKey, AllowedColor>> = {
  development: red,
  preview: green,
  test: orange,
};

const getShade = (
  envColor?: AllowedColor
): Record<PaletteMode, keyof AllowedColor> => ({
  dark: envColor ? 200 : 50,
  light: 800,
});

/**
 * Sets border and text color for badge.
 */
export function setEnvColor(
  envKey: EnvKey,
  paletteMode: PaletteMode = "light"
): CSSObject {
  const envColor = envColorMap[envKey];
  const shade = getShade(envColor)[paletteMode];

  if (!envColor) {
    return colorCssObject(grey[shade]);
  }

  return colorCssObject(envColor[shade]);
}
