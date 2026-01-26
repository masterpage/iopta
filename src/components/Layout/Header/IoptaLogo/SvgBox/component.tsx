import { Box } from "@mui/material";

import { type SvgBoxProps } from "./types";

export function SvgBox(props: SvgBoxProps) {
  return (
    <Box
      component="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      {...props}
    />
  );
}
