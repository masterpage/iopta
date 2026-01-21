import { getSx } from "@/utils";
import { Box, BoxProps, decomposeColor, useTheme } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";

interface LozengeProps extends BoxProps {
  value: string;
}

export function Lozenge(props: LozengeProps) {
  const { value, sx, ...boxProps } = props;
  const theme = useTheme();
  const {
    palette: { mode },
    typography: { fontFamilyMono },
  } = theme;
  const isLightMode = mode === "light";
  const isBuy = value === "BUY";
  const color = (isBuy ? green : deepOrange)[isLightMode ? 700 : 300];

  return (
    <Box
      component="span"
      {...boxProps}
      sx={{
        backgroundColor: `rgba(${decomposeColor(color).values.join(
          ","
        )}, 0.15)`,
        borderRadius: "1rem",
        color,
        fontFamily: fontFamilyMono,
        fontSize: "smaller",
        padding: "round(0.1875em, 1px) round(0.75em, 1px)",
        ...getSx(sx, theme),
      }}
    >
      {value}
    </Box>
  );
}
