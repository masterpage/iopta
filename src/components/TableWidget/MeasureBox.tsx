"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { Box, BoxProps } from "@mui/material";

import { getSx } from "@/utils";

interface MeasureBoxProps extends Omit<BoxProps, "children"> {
  children: (w: number) => ReactNode;
}

export function MeasureBox(props: MeasureBoxProps) {
  const { children, sx, ...restBoxProps } = props;
  const ref = useRef(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setW(Math.round(entry.contentRect.width));
      }
    });

    ro.observe(ref.current);

    return () => ro.disconnect();
  }, []);

  return (
    <Box
      sx={(theme) => ({ ...getSx(sx, theme) })}
      {...{ ref, ...restBoxProps }}
    >
      {children(w)}
    </Box>
  );
}
