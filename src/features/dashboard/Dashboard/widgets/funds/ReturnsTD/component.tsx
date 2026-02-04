import { Box, useTheme } from "@mui/material";

import {
  parsePctArray,
  TableWidget,
  type TableWidgetProps,
  type WidgetProps,
} from "@/components";

import { dataReturnsTD } from "./data";
import { ReturnsTDData } from "./types";
import { Last18mBars } from "@/components/TableWidget/charts";

export function ReturnsTD(props: Omit<WidgetProps, "title">) {
  const theme = useTheme();
  const {
    palette: { text },
    typography: { fontFamilyMono },
  } = theme;
  const columns: TableWidgetProps<ReturnsTDData>["columns"] = [
    { accessorKey: "fund", header: "Fund", size: 140 },
    {
      accessorKey: "strategy",
      header: "Strategy",
      size: 140,
      enableResizing: false,
    },
    {
      accessorKey: "mtd",
      size: 66,
      header: "MTD",
      cell: ({ getValue }) => {
        const value = getValue();
        const v = Number(value);

        return (
          <Box
            sx={{
              fontFamily: fontFamilyMono,
              fontSize: "round(92%, 1px)",
              textAlign: "right",
            }}
          >
            {v.toFixed(2)}
            <Box component="span" sx={{ color: text.secondary, opacity: 0.75 }}>
              %
            </Box>
          </Box>
        );
      },
      enableResizing: true,
      meta: { align: "right" },
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
      size: 66,
      cell: ({ column, getValue }) => {
        const value = getValue();
        const v = Number(value);
        const {} = column;

        return (
          <Box
            sx={{
              fontFamily: fontFamilyMono,
              fontSize: "round(92%, 1px)",
              textAlign: "right",
            }}
          >
            {v.toFixed(2)}
            <Box component="span" sx={{ color: text.secondary, opacity: 0.75 }}>
              %
            </Box>
          </Box>
        );
      },
      meta: { align: "right" },
    },
    {
      accessorKey: "ltm",
      header: "LTM",
      size: 66,
      cell: ({ column, getValue }) => {
        const value = getValue();
        const v = Number(value);
        const {} = column;

        return (
          <Box
            sx={{
              fontFamily: fontFamilyMono,
              fontSize: "round(92%, 1px)",
              textAlign: "right",
            }}
          >
            {v.toFixed(2)}
            <Box component="span" sx={{ color: text.secondary, opacity: 0.75 }}>
              %
            </Box>
          </Box>
        );
      },
      meta: { align: "right" },
    },
    {
      accessorKey: "duration",
      header: "Duration",
      size: 66,
      cell: ({ column, getValue }) => {
        const value = getValue();
        const v = Number(value);
        const {} = column;

        return (
          <Box
            sx={{
              fontFamily: fontFamilyMono,
              fontSize: "round(92%, 1px)",
              textAlign: "right",
            }}
          >
            {v.toFixed(2)}
            <Box component="span" sx={{ color: text.secondary, opacity: 0.75 }}>
              %
            </Box>
          </Box>
        );
      },
      meta: { align: "right" },
    },
    {
      accessorKey: "leverage",
      cell: ({ getValue }) => {
        const value = getValue();
        const v = Number(value);

        return (
          <Box
            sx={{
              fontFamily: fontFamilyMono,
              fontSize: "round(92%, 1px)",
              textAlign: "right",
            }}
          >
            {v.toFixed(2)}
            <Box component="span" sx={{ color: text.secondary, opacity: 0.75 }}>
              &times;
            </Box>
          </Box>
        );
      },
      header: "Leverage",
      meta: { align: "right" },
      size: 66,
    },
      meta: { align: "right" },
    },
    { accessorKey: "aum", header: "AUM", size: 100, meta: { align: "right" } },
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
