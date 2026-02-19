"use client";

import { Box, useTheme } from "@mui/material";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dataReturnsLast } from "../data";
import { useMemo } from "react";
import { ReturnsLast } from "../types";

// ---- Colors (optional palette) ----
const FUND_COLORS: string[] = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
];

// ---- Helpers ----
const getSortedIsoDates = (rows: ReturnsLast[]): string[] => {
  const set = new Set<string>();
  rows.forEach((r) => Object.keys(r.values).forEach((d) => set.add(d)));
  return Array.from(set).sort(); // ISO sorts chronologically
};

// Convert to Recharts-friendly array:
// [{date: "2025-03-01", "Alpha Credit Fund": 0.5, "Beta Macro Fund": 0.9, ...}, ...]
const toWideSeries = (rows: ReturnsLast[], dates: string[]) => {
  return dates.map((iso) => {
    const point: Record<string, any> = { date: iso };
    rows.forEach((r) => {
      point[r.fund] = r.values[iso] ?? null; // null gaps if any
    });
    return point;
  });
};

// Formatters
const pct = (n?: number | string | null) =>
  typeof n === "number" ? `${n.toFixed(2)}%` : (n ?? "");

const monthTick = (iso: string) => {
  // Show "MMM-YY"
  const d = new Date(iso);
  const m = d.toLocaleString("en-US", { month: "short" });
  const yy = String(d.getUTCFullYear()).slice(2);
  return `${m}’${yy}`;
};

export function Chart() {
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

  const dates = useMemo(
    () => getSortedIsoDates(dataReturnsLast),
    [dataReturnsLast],
  );
  const lineData = useMemo(
    () => toWideSeries(dataReturnsLast, dates),
    [dataReturnsLast, dates],
  );

  return (
    <Box component={ResponsiveContainer}>
      <LineChart
        responsive
        data={lineData}
        margin={{
          top: 2,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <ReferenceLine y={0} stroke={colorAxis} strokeWidth={2} />
        {dataReturnsLast.map((row, idx) => (
          <Line
            activeDot={{ r: 4, stroke: paper }}
            dataKey={row.fund}
            dot={false}
            isAnimationActive={false}
            key={row.fund}
            opacity={0.5}
            stroke={FUND_COLORS[idx % FUND_COLORS.length]}
            strokeWidth={2}
            type="monotone"
          />
        ))}
        <CartesianGrid
          stroke={grey[isLightMode ? 400 : 600]}
          strokeDasharray="1 3"
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="date"
          height={20}
          minTickGap={24}
          tick={{ fill: text.secondary, fontSize: "12px" }}
          tickFormatter={monthTick}
          tickLine={false}
        />
        <YAxis
          axisLine={{ stroke: colorAxis }}
          tick={{ fill: text.secondary, fontSize: "12px" }}
          tickLine={false}
          width="auto"
          tickFormatter={(v) => {
            if (v === 0) {
              return v;
            }

            return `${v}%`;
          }}
          domain={["auto", "auto"]}
        />
        <Tooltip
          formatter={(val, name) => [pct(val as number), name as string]}
        />
      </LineChart>
    </Box>
  );
}
