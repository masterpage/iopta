import { Fragment } from "react/jsx-runtime";

import { Box, useTheme } from "@mui/material";
import { ContentType } from "recharts/types/component/Tooltip";

import { BaseNumber, CurrencyNumber, monthTick } from "@/utils";
import { LegendIcon } from "@/components";

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

export const TooltipEquityAndLeverage: ContentType<number, string> = (
  props,
) => {
  const { active, label: date } = props;
  const payload = props.payload as Payload[];

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const theme = useTheme();
  const {
    alpha,
    palette: { mode, text },
    shape: { borderRadius },
    typography: { fontWeightBold },
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
        gridTemplateColumns: "100px 56px 56px",
        lineHeight: "normal",
        padding: "0.75em",
      }}
    >
      <Box
        sx={{
          textAlign: "right",
        }}
      >
        &nbsp;
      </Box>
      <Box
        data-testid="date"
        sx={{
          color: text.primary,
          fontWeight: fontWeightBold,
          gridColumn: "2 / span 2",
          textAlign: "center",
        }}
      >
        {monthTick(String(date))}
      </Box>
      <Box
        data-testid="divider"
        sx={{
          borderBottom: `1px solid ${text.primary}`,
          gridColumn: "1 / span 3",
        }}
      />
      {payload.map(({ color, name, value }, i) => {
        const isEquity = i === 0;
        return (
          <Fragment key={name}>
            <Box
              data-testid="key"
              sx={{
                alignItems: "center",
                display: "flex",
                gap: "3px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textWrapMode: "nowrap",
              }}
            >
              <LegendIcon
                {...{
                  entry: { value: name, color },
                  iconSize: 14,
                  iconType: "line",
                }}
              />
              {name}
            </Box>
            <Box data-testid="value-equity" sx={{ textAlign: "right" }}>
              {isEquity ? <CurrencyNumber scale={1e7} value={value} /> : ""}
            </Box>
            <Box data-testid="value-leverage" sx={{ textAlign: "right" }}>
              {isEquity ? (
                ""
              ) : (
                <BaseNumber
                  value={value}
                  options={{
                    fractionDigits: 1,
                    unit: { name: "%" },
                  }}
                />
              )}
            </Box>
          </Fragment>
        );
      })}
    </Box>
  );
};
