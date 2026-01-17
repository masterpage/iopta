import { SxProps, Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

/**
 * Detects given `sx` type.
 * @returns `SystemStyleObject`, ready to spread in `sx` prop.
 */
export function getSx<T extends object = Theme>(
  sx: SxProps<T> | undefined,
  theme: T
): SystemStyleObject<T> {
  switch (true) {
    case sx === undefined:
    case sx === null:
      return null;
    case Array.isArray(sx):
      // TODO: Handle `sx` as array
      return {};
    case typeof sx === "object":
      return sx;
    default:
      return sx(theme);
  }
}
