import { Box, useTheme } from "@mui/material";

import {
  Last18mBars,
  parsePctArray,
  TableWidget,
  type TableWidgetProps,
  type WidgetProps,
} from "@/components";

import { BaseNumber } from "@/utils";

import { dataReturnsTD } from "./data";
import { ReturnsTDData } from "./types";

export function ReturnsTD(props: Omit<WidgetProps, "title">) {
  const theme = useTheme();
  const {
    palette: { text },
    typography: { fontFamilyMono },
  } = theme;
  const columns: TableWidgetProps<ReturnsTDData>["columns"] = [
    {
      accessorKey: "fund",
      header: "Fund",
      minSize: 180,
      sortingFn: "alphanumeric",
    },
    {
      accessorKey: "strategy",
      header: "Strategy",
      minSize: 180,
      sortingFn: "alphanumeric",
    },
    {
      accessorKey: "mtd",
      minSize: 66,
      header: "MTD",
      cell: ({ getValue }) => (
        <BaseNumber value={getValue()} options={{ unit: { name: "%" } }} />
      ),
      meta: { align: "right" },
      sortingFn: "alphanumeric",
    },
    {
      header: "Last 18mo",
      accessorKey: "last18mo",
      enableSorting: false,
      size: 120,
      cell: ({ getValue, column }) => {
        const { getSize } = column;
        const arr = parsePctArray(getValue<string>());
        const width = getSize();

        return (
          <Last18mBars
            negMinOpacity={1}
            othersOpacity={0.5}
            posMaxOpacity={1}
            showZeroLine={false}
            values={arr}
            width={width}
          />
        );
      },
      enableResizing: false,
    },
    {
      accessorKey: "ytd",
      header: "YTD",
      minSize: 66,
      cell: ({ getValue }) => (
        <BaseNumber
          value={getValue()}
          options={{ coloredPositiveNegative: true, unit: { name: "%" } }}
        />
      ),
      meta: { align: "right" },
      sortingFn: "alphanumeric",
    },
    {
      accessorKey: "ltm",
      header: "LTM",
      minSize: 66,
      cell: ({ getValue }) => (
        <BaseNumber value={getValue()} options={{ unit: { name: "%" } }} />
      ),
      meta: { align: "right" },
      sortingFn: "alphanumeric",
    },
    {
      accessorKey: "duration",
      header: "Duration",
      minSize: 66,
      cell: ({ getValue }) => (
        <BaseNumber value={getValue()} options={{ unit: { name: "%" } }} />
      ),
      meta: { align: "right" },
      sortingFn: "alphanumeric",
    },
    {
      accessorKey: "leverage",
      cell: ({ getValue }) => (
        <BaseNumber
          value={getValue()}
          options={{ unit: { name: "&times;" } }}
        />
      ),
      header: "Leverage",
      meta: { align: "right" },
      minSize: 66,
      sortingFn: "alphanumeric",
    },
    {
      accessorKey: "aum",
      cell: ({ getValue }) => {
        const value = getValue();
        const v = Number(value).toLocaleString("en-US", {
          style: "decimal",
          maximumFractionDigits: 0,
        });

        return (
          <Box
            sx={{
              fontFamily: fontFamilyMono,
              fontSize: "round(92%, 1px)",
              textAlign: "right",
            }}
          >
            <Box component="span" sx={{ color: text.secondary, opacity: 0.75 }}>
              $
            </Box>
            {v}
          </Box>
        );
      },
      header: "AUM",
      meta: { align: "right" },
      minSize: 180,
      sortingFn: "alphanumeric",
    },
  ];

  return (
    <TableWidget
      {...{ columns, ...props }}
      data={dataReturnsTD}
      fullBleed
      title="Returns"
      subTitle="MTD/YTD"
    />
  );
}
