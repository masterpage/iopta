import { Box } from "@mui/material";

import { IconUpDown } from "./IconUpDown";
import { SortIndicatorProps } from "./types";

export function SortIndicator(props: SortIndicatorProps) {
  const { canSort, isSorted, ...boxProps } = props;

  if (!canSort) {
    return null;
  }

  return (
    <Box component="span" {...boxProps}>
      <IconUpDown height={12} isSorted={isSorted} />
    </Box>
  );
}
