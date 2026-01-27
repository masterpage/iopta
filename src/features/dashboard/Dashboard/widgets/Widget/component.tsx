import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardProps,
  useTheme,
} from "@mui/material";

import { getSx } from "@/utils";

export interface WidgetProps extends Omit<CardProps, "title"> {
  title: ReactNode;
}

export function Widget(props: WidgetProps) {
  const { children, sx, title, ...cardProps } = props;
  const theme = useTheme();

  return (
    <Card
      elevation={2}
      {...cardProps}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <CardHeader
        slotProps={{
          title: { fontSize: "1rem", lineHeight: 1, variant: "h6" },
        }}
        title={title}
      />
      <CardContent
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          minHeight: 0,
          padding: "0 1rem 1rem",
          "&:last-child": {
            paddingBottom: "1rem",
          },
          ...getSx(sx, theme),
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}
