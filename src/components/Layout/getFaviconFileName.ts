import { PaletteMode } from "@mui/material";

import { CURRENT_ENV, EnvKey } from "@/utils";

const FILE_PREFIX: string = "favicon";
const FILE_EXTENSION: string = "ico";

/**
 * Generates favicon file name based on environment name and palette mode.
 * @param paletteMode Palette mode, either `light` or `dark`.
 * @param env Environment name.
 * @returns `favicon-development-dark`. For `light` mode, `favicon-development`.
 */
export const getFaviconFileName = (
  paletteMode: PaletteMode = "light",
  env: EnvKey = CURRENT_ENV
): string => {
  const ifPaletteMode: PaletteMode | undefined =
    env !== "production" && paletteMode === "dark" ? paletteMode : undefined;
  /**
   * @sample `['favicon', 'development', 'dark']`. For `light` mode, `['favicon', 'development', undefined]`
   */
  const favicon: [string, EnvKey, typeof ifPaletteMode] = [
    FILE_PREFIX,
    env,
    ifPaletteMode,
  ];
  const faviconFileName: string = `${favicon
    .filter((f) => f)
    .join("-")}.${FILE_EXTENSION}`;

  return faviconFileName;
};
