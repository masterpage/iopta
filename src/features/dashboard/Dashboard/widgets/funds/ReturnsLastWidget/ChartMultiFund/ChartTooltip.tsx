import { Fragment } from "react/jsx-runtime";

import { Box, useTheme } from "@mui/material";
import { ContentType } from "recharts/types/component/Tooltip";

import { BaseNumber, monthTick } from "@/utils";

type PayloadPayload = Record<string, number> & {
  date: string;
};

interface Payload {
  color: string;
  dataKey: string;
  fill: string;
  graphicalItemId: string;
  hide: false;
  name: string;
  payload: PayloadPayload;
  stroke: string;
  strokeWidth: number;
  value: number;
}

export const ChartTooltip: ContentType<number, string> = (props) => {
  const { active, label: date } = props;
  const payload = props.payload as Payload[];

  console.log({ props });

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const theme = useTheme();
  const {
    alpha,
    palette: { mode, text },
    shape: { borderRadius },
    typography: { fontWeightBold, fontWeightMedium },
  } = theme;
  const isLightMode = mode === "light";

  return (
    <Box
      sx={{
        backgroundColor: alpha(
          theme.palette.grey[isLightMode ? 300 : 700],
          0.9,
        ),
        borderRadius: `${borderRadius}px`,
        display: "grid",
        fontSize: "0.75em",
        gap: "0.5em",
        gridTemplateColumns: "120px 46px",
        lineHeight: "normal",
        padding: "0.75em",
      }}
    >
      <Box
        data-testid="value"
        sx={{
          borderBottom: `1px solid ${text.primary}`,
          color: text.primary,
          fontWeight: fontWeightBold,
          gridColumn: "1 / span 2",
          marginBottom: "0.125em",
          paddingBottom: "0.5em",
          textAlign: "right",
        }}
      >
        {monthTick(String(date))}
      </Box>
      {payload.map(({ color, name, value }) => {
        return (
          <Fragment key={name}>
            <Box
              data-testid="key"
              sx={{
                color,
                fontWeight: fontWeightMedium,
                overflow: "hidden",
                textOverflow: "ellipsis",
                textWrapMode: "nowrap",
              }}
            >
              {name}
            </Box>
            <Box data-testid="value" sx={{ textAlign: "right" }}>
              <BaseNumber
                value={value}
                options={{
                  fractionDigits: 1,
                  unit: { name: "%" },
                }}
              />
            </Box>
          </Fragment>
        );
      })}
    </Box>
  );
};
