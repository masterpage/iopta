"use client";

import { getSx, setAlphaColor } from "@/utils";
import { Box, BoxProps } from "@mui/material";
import { pink } from "@mui/material/colors";
import { PropsWithChildren } from "react";

export function Placeholder(props: PropsWithChildren<BoxProps>) {
  const { children, sx, ...boxProps } = props;
  const color = pink[100];
  const background = setAlphaColor(color, 0.2);

  return (
    <Box
      {...boxProps}
      sx={(theme) => {
        const {
          typography: { fontFamilyMono },
        } = theme;

        return {
          alignItems: "center",
          background,
          border: `1px solid ${color}`,
          color,
          display: "flex",
          fontFamily: fontFamilyMono,
          fontSize: "small",
          height: "500px",
          justifyContent: "center",
          ...getSx(sx, theme),
        };
      }}
    >
      {children}
    </Box>
  );
}
