"use client";

import { useState } from "react";

import { Box, Link, useTheme } from "@mui/material";
import {
  ColumnSizingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

import {
  defaultRglProps,
  SortIndicator,
  Widget,
  WIDGET_PADDING_CONTENT,
  type WidgetProps,
} from "@/components";

export interface TableWidgetProps<D extends object> extends Omit<
  WidgetProps,
  "children"
> {
  columns: ColumnDef<D>[];
  data: D[];
}

export function TableWidget<D extends object>(props: TableWidgetProps<D>) {
  const { columns, data, ...widgetProps } = props;
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});
  const [sorting, setSorting] = useState<SortingState>([
    { id: "fund", desc: false },
  ]);
  const theme = useTheme();
  const {
    palette: { grey, mode, text },
    typography: { htmlFontSize },
  } = theme;
  const { rowHeight } = defaultRglProps;
  const borderColor = grey[mode === "light" ? 300 : 700];
  const table = useReactTable({
    columnResizeMode: "onChange",
    columns,
    data,
    enableColumnResizing: true,
    enableSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnSizingChange: setColumnSizing,
    onSortingChange: setSorting,
    state: { columnSizing, sorting },
  });
  const widgetFontSizeEm: number = 0.825;
  const widgetHeaderFontSizePx: number = Math.ceil(0.75 * htmlFontSize);
  const paddingPx: number = Math.ceil((htmlFontSize * widgetFontSizeEm) / 2);
  const utmostPadding = `${WIDGET_PADDING_CONTENT}rem`;
  const twoLineHeaderHeight = Math.ceil(widgetHeaderFontSizePx * 2.3);

  return (
    <Widget {...widgetProps}>
      <Box
        component="table"
        sx={{
          borderCollapse: "collapse",
          fontSize: `round(${widgetFontSizeEm}em, 1px)`,
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
                      borderBottom: `1px solid ${text.secondary}`,
                      paddingLeft: `${paddingPx}px`,
                      width: h.getSize(),
                      ...(isFirst ? { paddingLeft: utmostPadding } : {}),
                      ...(isLast ? { paddingRight: utmostPadding } : {}),
                    }}
                  >
                    <Box
                      onClick={column.getToggleSortingHandler()}
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        gap: `${paddingPx}px`,
                        height: twoLineHeaderHeight,
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
                          onMouseDown={h.getResizeHandler()}
                          onTouchStart={h.getResizeHandler()}
                          sx={{
                            borderRight: `2px ${
                              canResize ? "solid" : "dotted"
                            } ${borderColor}`,
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
                    : { borderBottom: `1px solid ${borderColor}` }),
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
                        padding: `${paddingPx}px`,
                        textAlign,
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: column.getSize(),
                        ...(isFirst ? { paddingLeft: utmostPadding } : {}),
                        ...(isLast ? { paddingRight: utmostPadding } : {}),
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
    </Widget>
  );
}
