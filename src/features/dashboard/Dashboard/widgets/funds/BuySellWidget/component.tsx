"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ReferenceLine,
  RenderableText,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { useTheme } from "@mui/material";

import { Widget, type WidgetProps } from "@/components";
import { dataBuySell } from "./data";
import { BuySell } from "./types";

const data: Pick<BuySell, "fund" | "totalBuysMM" | "totalSellsMM">[] =
  dataBuySell.map((d) => {
    return {
      fund: d.fund,
      totalBuysMM: +d.totalBuysMM,
      totalSellsMM: -Math.abs(d.totalSellsMM),
    };
  });

const labelFormatter = (text: RenderableText): string => {
  if (text === 0) {
    return String(text);
  }

  if (!text) {
    return "";
  }

  return `${text}m`;
};

export function BuySellWidget(props: Omit<WidgetProps, "title">) {
  const theme = useTheme();
  const {
    palette: { buy, grey, sell, text, mode },
    typography: { fontWeightMedium },
  } = theme;
  const isLightMode = mode === "light";
  const colorAxis = grey[isLightMode ? 800 : 100];

  return (
    <Widget {...props} title="Buy/Sell">
      <ResponsiveContainer>
        <BarChart
          barCategoryGap="20%"
          data={data}
          layout="vertical"
          margin={{
            bottom: 0,
            left: 0,
            right: 10,
            top: 0,
          }}
          responsive
          stackOffset="sign"
        >
          <CartesianGrid
            horizontal={false}
            stroke={grey[isLightMode ? 400 : 600]}
            strokeDasharray="1 4"
          />
          <XAxis
            axisLine={{ stroke: colorAxis }}
            height={20}
            tick={{ fill: text.secondary, fontSize: "12px" }}
            tickLine={false}
            type="number"
            tickFormatter={labelFormatter}
          />
          <YAxis
            axisLine={false}
            dataKey="fund"
            interval={0}
            tick={{
              fill: text.secondary,
              fontSize: "12px",
            }}
            tickLine={false}
            type="category"
            width="auto"
          />
          <ReferenceLine x={0} stroke={colorAxis} strokeWidth={2} />
          <Bar
            dataKey="totalSellsMM"
            fill={sell.main}
            name="Total Sells"
            opacity={0.5}
            stackId="flow"
          >
            <LabelList
              dataKey="totalSellsMM"
              fill={text.secondary}
              fontSize={11}
              fontWeight={fontWeightMedium}
              formatter={labelFormatter}
              position="right"
            />
          </Bar>
          <Bar
            dataKey="totalBuysMM"
            fill={buy.main}
            name="Total Buys"
            opacity={0.5}
            stackId="flow"
          >
            <LabelList
              dataKey="totalBuysMM"
              fill={text.secondary}
              fontSize={11}
              fontWeight={fontWeightMedium}
              formatter={labelFormatter}
              position="right"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Widget>
  );
}
