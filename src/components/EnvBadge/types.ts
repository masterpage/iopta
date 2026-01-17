import { green, grey, orange, red } from "@mui/material/colors";

import { EnvKey } from "@/utils";

export type AllowedColor =
  | typeof green
  | typeof grey
  | typeof orange
  | typeof red;

export type EnvBadgeDictionary = Record<EnvKey, string>;
