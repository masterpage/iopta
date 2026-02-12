import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardProps,
  Typography,
  useTheme,
} from "@mui/material";

interface TileProps extends CardProps {
  header: ReactNode;
  footer?: ReactNode;
}

export function Tile(props: TileProps) {
  const { footer, header, children, ...cardProps } = props;
  const theme = useTheme();
  const {
    palette: { text },
  } = theme;
  const cardPadding = "1rem";
  const cardWithFooterPaddingBottom = "0.75rem";

  return (
    <Card
      elevation={1}
      sx={{ display: "flex", flexDirection: "column" }}
      {...cardProps}
    >
      <CardHeader
        slotProps={{
          title: {
            variant: "subtitle2",
          },
        }}
        sx={{ color: text.secondary }}
        title={header}
      />
      <CardContent
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          gap: "0.375em",
          justifyContent: "flex-end",
          padding: `0 ${cardPadding} ${cardPadding}`,
          textAlign: "right",
          "&:last-child": {
            paddingBottom: footer ? cardWithFooterPaddingBottom : cardPadding,
          },
        }}
      >
        <Typography sx={{ lineHeight: 1 }} variant="h4">
          {children}
        </Typography>
        {footer && (
          <Typography
            component="footer"
            sx={{ color: text.secondary, display: "block", lineHeight: 1 }}
            variant="caption"
          >
            {footer}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
