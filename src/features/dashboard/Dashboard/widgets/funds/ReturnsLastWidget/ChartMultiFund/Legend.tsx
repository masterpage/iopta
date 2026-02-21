import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { Box, BoxProps, Link, useTheme } from "@mui/material";

import { Placeholder, SortIndicator } from "@/components";
import { dataReturnsLast } from "../data";
import { useState } from "react";
import { BaseNumber } from "@/utils";

const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "fund",
    header: "Fund",
    minSize: 140,
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "mtd",
    cell: ({ getValue }) => (
      <BaseNumber
        value={getValue()}
        options={{
          fractionDigits: 1,
          unit: { name: "%" },
        }}
      />
    ),
    header: "MTD",
    size: 66,
    meta: { align: "right" },
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "ytd",
    cell: ({ getValue }) => (
      <BaseNumber
        value={getValue()}
        options={{
          fractionDigits: 1,
          unit: { name: "%" },
        }}
      />
    ),
    header: "YTD",
    size: 66,
    meta: { align: "right" },
    sortingFn: "alphanumeric",
  },
];

const data = dataReturnsLast.slice(0, 10).map((rl) => {
  const { fund, ytd, mtd } = rl;

  return { fund, ytd, mtd };
});

export function Legend(props: BoxProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "mtd", desc: true },
  ]);
  const theme = useTheme();
  const {
    palette: { grey, mode, text },
    typography: { htmlFontSize },
  } = theme;
  const rowHeight = 30;
  const borderColorRow = grey[mode === "light" ? 300 : 700];
  const borderColorHeader = text.secondary;
  const table = useReactTable({
    columns,
    data,
    enableColumnResizing: false,
    enableSorting: true,
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting },
  });
  const widgetFontSizeEm: number = 0.825;
  const widgetHeaderFontSizePx: number = Math.ceil(0.75 * htmlFontSize);
  const padding = `${Math.ceil((htmlFontSize * widgetFontSizeEm) / 2)}px`;

  return (
    <Box
      component="table"
      sx={{
        borderCollapse: "collapse",
        fontSize: `round(${widgetFontSizeEm}em, 1px)`,
        width: "100%",
      }}
    >
      <Box component="thead">
        {table.getHeaderGroups().map((hg) => (
          <Box
            component="tr"
            key={hg.id}
            sx={{
              color: text.secondary,
              fontSize: `${widgetHeaderFontSizePx}px`,
              height: rowHeight,
              letterSpacing: "0.5px",
            }}
          >
            {hg.headers.map((h, i, headers) => {
              const { column } = h;
              const canResize = column.getCanResize();
              const canSort = column.getCanSort();
              const isFirst = i === 0;
              const isLast = i === headers.length - 1;
              const { align = "left" } = column.columnDef.meta || {};
              const isAlignLeft = align === "left";
              const headerAlign = isAlignLeft ? "space-between" : align;

              return (
                <Box
                  component="th"
                  key={h.id}
                  sx={{
                    borderBottom: `1px solid ${borderColorHeader}`,
                    paddingLeft: padding,
                    width: h.getSize(),
                    ...(isFirst ? { paddingLeft: padding } : {}),
                    ...(isLast ? { paddingRight: padding } : {}),
                  }}
                >
                  <Box
                    onClick={column.getToggleSortingHandler()}
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      gap: padding,
                      height: 20,
                      justifyContent: headerAlign,
                    }}
                  >
                    <Box
                      {...(canSort
                        ? {
                            component: Link,
                            role: "link",
                            underline: "none",
                          }
                        : {
                            component: "span",
                            role: "columnheader",
                          })}
                      data-testid="labelWithSortIndicator"
                      sx={{
                        alignItems: "center",
                        cursor: canSort ? "pointer" : "default",
                        display: "flex",
                        flexDirection: isAlignLeft ? "row" : "row-reverse",
                        gap: "0.375em",
                        lineHeight: "normal",
                        textAlign: align,
                        userSelect: "none",
                      }}
                    >
                      <Box
                        component="span"
                        data-testid="label"
                        sx={{
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                        }}
                      >
                        {flexRender(column.columnDef.header, h.getContext())}
                      </Box>
                      <SortIndicator
                        data-testid="SortIndicator"
                        sx={{ display: "flex" }}
                        canSort={column.getCanSort()}
                        isSorted={column.getIsSorted()}
                      />
                    </Box>
                    {!isLast && (
                      <Box
                        sx={{
                          borderRight: `2px ${
                            canResize ? "solid" : "dotted"
                          } ${borderColorRow}`,
                          cursor: canResize ? "col-resize" : "default",
                          height: "100%",
                          touchAction: "none",
                          userSelect: "none",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
      <tbody>
        {table.getRowModel().rows.map((row, r, rows) => {
          const isLastRow = r === rows.length - 1;

          return (
            <Box
              component="tr"
              key={row.id}
              sx={{
                ...(isLastRow
                  ? {}
                  : { borderBottom: `1px solid ${borderColorRow}` }),
                height: rowHeight,
              }}
            >
              {row.getVisibleCells().map((cell, i, cells) => {
                const { column, getContext } = cell;
                const { columnDef } = column;
                const isFirst = i === 0;
                const isLast = i === cells.length - 1;
                const { align: textAlign = "left" } = columnDef.meta || {};

                return (
                  <Box
                    component="td"
                    key={cell.id}
                    sx={{
                      lineHeight: "initial",
                      overflow: "hidden",
                      padding,
                      textAlign,
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      width: column.getSize(),
                      ...(isFirst ? { paddingLeft: padding } : {}),
                      ...(isLast ? { paddingRight: padding } : {}),
                    }}
                  >
                    {flexRender(columnDef.cell, getContext())}
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </tbody>
    </Box>
  );

  return <Placeholder {...props} />;
}
