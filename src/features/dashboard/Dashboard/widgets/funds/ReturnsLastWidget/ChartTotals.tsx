"use client";

import { useMemo, useState } from "react";

import { Box, useTheme } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { dataReturnsLast } from "./data";
import type { ReturnsLast } from "./types";

// Aggregate series for totals (for bar charts)
const toTotals = (rows: ReturnsLast[]) =>
  rows
    .map((r) => ({
      fund: r.fund,
      totalLast12mo: r.totalLast12mo,
      ytd: r.ytd,
      mtd: r.mtd,
    }))
    .sort((a, b) => b.totalLast12mo - a.totalLast12mo); // sort descending by total
// Formatters
const pct = (n?: number | string | null) =>
  typeof n === "number" ? `${n.toFixed(2)}%` : (n ?? "");

export function ChartTotals() {
  const [showYtd] = useState(true);
  const [showMtd] = useState(true);
  const [showTotal] = useState(true);
  const theme = useTheme();
  const {
    palette: { grey, mode, text },
  } = theme;
  const isLightMode = mode === "light";
  const colorAxis = grey[isLightMode ? 800 : 100];

  const totals = useMemo(() => toTotals(dataReturnsLast), [dataReturnsLast]);

  return (
    <Box component={ResponsiveContainer} sx={{ flex: 1 }}>
      <BarChart
        data={totals}
        layout="vertical"
        margin={{
          top: 2,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          stroke={grey[isLightMode ? 400 : 600]}
          strokeDasharray="1 3"
          horizontal={false}
        />
        <XAxis
          axisLine={false}
          height={20}
          tick={{ fill: text.secondary, fontSize: "12px" }}
          tickLine={false}
          tickFormatter={(v) => {
            if (v === 0) {
              return v;
            }

            return `${v}%`;
          }}
          type="number"
        />
        <YAxis
          axisLine={{ stroke: colorAxis }}
          dataKey="fund"
          tick={{ fill: text.secondary, fontSize: "12px" }}
          tickLine={false}
          type="category"
          width="auto"
        />
        <Tooltip
          formatter={(val, name) => [pct(val as number), name as string]}
        />
        <Box component={Legend} iconSize={12} iconType="square" fontSize={12} />
        {showTotal && (
          <Bar dataKey="totalLast12mo" fill="#1f77b4" name="Last 12mo Total" />
        )}
        {showYtd && <Bar dataKey="ytd" fill="#2ca02c" name="YTD (2026)" />}
        {showMtd && (
          <Bar dataKey="mtd" fill="#ff7f0e" name="MTD (last month)" />
        )}
      </BarChart>
    </Box>
  );
}
