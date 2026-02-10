import { breakpointsValues as breakpoints } from "@/components";
import { ResponsiveGridProps } from "./types";

export const defaultRglProps: Required<
  Pick<
    ResponsiveGridProps,
    "breakpoints" | "cols" | "containerPadding" | "margin" | "rowHeight"
  >
> = {
  breakpoints,
  cols: { xl: 18, lg: 12, md: 8, sm: 4, xs: 1 },
  containerPadding: { sm: [24, 24], xs: [16, 16] },
  margin: [20, 20],
  rowHeight: 40,
};
