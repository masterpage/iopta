import { ReactNode } from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  useTheme,
} from "@mui/material";

import { getSx } from "@/utils";
import { DragHandle } from "./DragIndicator";

export interface WidgetProps extends Omit<CardProps, "title"> {
  title: ReactNode;
  subTitle?: ReactNode;
}

export const WIDGET_PADDING: number = 0.625;

export function Widget(props: WidgetProps) {
  const { children, sx, subTitle, title, ...cardProps } = props;
  const theme = useTheme();
  const {
    palette: { text },
    typography: { fontWeightMedium },
  } = theme;

  return (
    <Card
      elevation={2}
      {...cardProps}
      sx={{ display: "flex", flexDirection: "column", ...getSx(sx, theme) }}
    >
      <CardHeader
        slotProps={{
          root: {
            sx: {
              padding: `${WIDGET_PADDING}rem`,
              paddingLeft: `${WIDGET_PADDING}rem`,
              userSelect: "none",
            },
          },
          title: {
            color: text.primary,
            fontSize: "1rem",
            fontWeight: fontWeightMedium,
            lineHeight: 1.25,
            variant: "h6",
          },
        }}
        title={
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <DragHandle sx={{ marginLeft: "-0.25rem" }} />
            <Box
              component="header"
              sx={{ display: "flex", alignItems: "baseline", gap: "0.25em" }}
            >
              <Box component="span">{title}</Box>
              {subTitle ? (
                <Box
                  component="span"
                  sx={{
                    color: text.secondary,
                    fontSize: "small",
                  }}
                >
                  {subTitle}
                </Box>
              ) : null}
            </Box>
          </Box>
        }
      />
      <CardContent
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          padding: `0 ${WIDGET_PADDING}rem ${WIDGET_PADDING}rem`,
          "&:last-child": {
            paddingBottom: `${WIDGET_PADDING}rem`,
          },
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}
