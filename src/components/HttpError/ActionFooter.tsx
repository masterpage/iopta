import { PropsWithChildren } from "react";

import { Box, BoxProps } from "@mui/material";

export function ActionFooter(props: PropsWithChildren<BoxProps>) {
  const { children, ...restBoxProps } = props;

  return (
    <Box
      sx={{ "> *": { m: "unset", mt: "0.5em" }, mt: "1.5rem" }}
      {...restBoxProps}
      component="footer"
    >
      {children}
    </Box>
  );
}
