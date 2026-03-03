import { useMemo } from "react";

import { useTheme } from "@mui/material";
import { blue, deepOrange } from "@mui/material/colors";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { ChartLegend } from "@/components";
import { monthTick } from "@/utils";

import { dataEquityAndLeverage } from "./data";
import { EquityAndLeverageByFund, IsoDateMonthEnd } from "./types";

// ---- Helpers ----
const getSortedIsoDates = (rows: EquityAndLeverageByFund[]): string[] => {
  const set = new Set<string>();

  rows.forEach((r) => Object.keys(r.values).forEach((d) => set.add(d)));

  return Array.from(set).sort(); // ISO sorts chronologically
};

type WideSeriesReturn = (FirmEquityAndLeverage & {
  date: IsoDateMonthEnd;
  firmLeverage_x: number;
})[];

interface FirmEquityAndLeverage {
  totalEquity_usd_mm: number;
  totalGross_usd_mm: number;
}

type ToWideSeries = (
  rows: EquityAndLeverageByFund[],
  dates: IsoDateMonthEnd[],
) => WideSeriesReturn;

// Convert to Recharts-friendly array:
const toWideSeries: ToWideSeries = (rows, dates) => {
  const wideSeries = dates.map<WideSeriesReturn[0]>((date) => {
    const { totalEquity_usd_mm, totalGross_usd_mm } =
      rows.reduce<FirmEquityAndLeverage>(
        (acc, curr) => {
          const { values } = curr;
          const { equity_usd_mm, leverage_x } = values[date];
          const totalGross = equity_usd_mm * leverage_x;

          acc = {
            totalEquity_usd_mm: acc.totalEquity_usd_mm + equity_usd_mm,
            totalGross_usd_mm: acc.totalGross_usd_mm + totalGross,
          };

          return acc;
        },
        { totalEquity_usd_mm: 0, totalGross_usd_mm: 0 },
      );

    const firmLeverage_x = totalGross_usd_mm / totalEquity_usd_mm;

    return { date, firmLeverage_x, totalEquity_usd_mm, totalGross_usd_mm };
  });

  return wideSeries;
};

// Formatters
const pct = (n?: number | string | null) =>
  typeof n === "number" ? `${n.toFixed(2)}%` : (n ?? "");

export function ChartEquityAndLeverage() {
  const theme = useTheme();
  const {
    palette: {
      background: { paper },
      grey,
      mode,
      text,
    },
  } = theme;
  const isLightMode = mode === "light";
  const colorAxis = grey[isLightMode ? 800 : 100];
  const colorEquity = blue[isLightMode ? 700 : 300];
  const colorLeverage = deepOrange[isLightMode ? 700 : 300];

  const lineData = useMemo(() => {
    const dates = getSortedIsoDates(dataEquityAndLeverage);

    return toWideSeries(dataEquityAndLeverage, dates);
  }, [dataEquityAndLeverage]);

  return (
    <ResponsiveContainer>
      <LineChart
        responsive
        data={lineData}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Line
          activeDot={{ r: 4, stroke: paper }}
          dataKey="totalEquity_usd_mm"
          dot={false}
          isAnimationActive={false}
          key="totalEquity_usd_mm"
          name="Firm Equity"
          opacity={0.5}
          strokeWidth={2}
          stroke={colorEquity}
          type="monotone"
          yAxisId="left"
        />
        <Line
          activeDot={{ r: 4, stroke: paper }}
          dataKey="firmLeverage_x"
          name="Firm Leverage"
          dot={false}
          isAnimationActive={false}
          key="firmLeverage_x"
          opacity={0.5}
          stroke={colorLeverage}
          strokeWidth={2}
          type="monotone"
          yAxisId="right"
        />
        <XAxis
          axisLine={{ stroke: colorAxis }}
          dataKey="date"
          height={20}
          minTickGap={24}
          tick={{ fill: text.secondary, fontSize: "12px" }}
          tickFormatter={monthTick}
          tickLine={false}
        />
        <YAxis
          axisLine={{ stroke: colorAxis }}
          orientation="left"
          tick={{ fill: text.secondary, fontSize: "12px" }}
          tickLine={false}
          tickFormatter={(v) => {
            if (v === 0) {
              return v;
            }

            const realValue = v * 1e7;
            const formatted = Number(realValue).toLocaleString("en-US", {
              currency: "USD",
              currencyDisplay: "narrowSymbol",
              minimumFractionDigits: 1,
              notation: "compact",
              style: "currency",
            });

            return formatted;
          }}
          width="auto"
          yAxisId="left"
          domain={["auto", "auto"]}
        />
        <YAxis
          axisLine={{ stroke: colorAxis }}
          orientation="right"
          tick={{ fill: text.secondary, fontSize: "12px" }}
          tickLine={false}
          // tickFormatter={(v) => {
          //   if (v === 0) {
          //     return v;
          //   }

          //   return `${v}%`;
          // }}
          width="auto"
          yAxisId="right"
          domain={["auto", "auto"]}
        />
        <Legend
          color={text.secondary}
          content={ChartLegend}
          iconType="line"
          iconSize={16}
          verticalAlign="top"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
