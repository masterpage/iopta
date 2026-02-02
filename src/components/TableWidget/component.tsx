"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

import { Widget, WIDGET_PADDING_CONTENT, type WidgetProps } from "@/components";
import { Box, useTheme } from "@mui/material";
import { useState } from "react";

export interface TableWidgetProps<D extends object>
  extends Omit<WidgetProps, "children"> {
  columns: ColumnDef<D>[];
  data: D[];
}

export function TableWidget<D extends object>(props: TableWidgetProps<D>) {
  const { columns, data, ...widgetProps } = props;
  const [columnSizing, setColumnSizing] = useState({});
  const theme = useTheme();
  const {
    palette: { grey, mode, text },
    typography: { htmlFontSize },
  } = theme;
  const borderColor = grey[mode === "light" ? 300 : 700];
  const table = useReactTable({
    columnResizeMode: "onChange",
    columns,
    data,
    enableColumnResizing: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnSizingChange: setColumnSizing,
    state: { columnSizing },
  });
  const widgetFontSizeEm: number = 0.825;
  const widgetHeaderFontSizeEm: number = 0.75;
  const widgetHeaderFontSizePx: number = Math.ceil(
    widgetHeaderFontSizeEm * htmlFontSize
  );
  const paddingPx: number = Math.ceil((htmlFontSize * widgetFontSizeEm) / 2);
  const utmostPadding = `${WIDGET_PADDING_CONTENT}rem`;
  const tableHeaderHeight = Math.ceil(widgetHeaderFontSizePx * 2.3);

  return (
    <Widget {...widgetProps}>
      <Box
        component="table"
        sx={{
          borderCollapse: "collapse",
          fontSize: `round(${widgetFontSizeEm}em, 1px)`,
          tableLayout: "fixed",
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
                lineHeight: "normal",
                letterSpacing: "0.5px",
                textAlign: "left",
              }}
            >
              {hg.headers.map((h, i, headers) => {
                const canResize = h.column.getCanResize();
                const isFirst = i === 0;
                const isLast = i === headers.length - 1;
                const { align = "left" } = h.column.columnDef.meta || {};
                const headerAlign = align === "left" ? "space-between" : align;

                return (
                  <Box
                    component="th"
                    key={h.id}
                    sx={{
                      borderBottom: `1px solid ${text.secondary}`,
                      padding: `${paddingPx}px 0 ${paddingPx}px ${paddingPx}px`,
                      width: h.getSize(),
                      ...(isFirst ? { paddingLeft: utmostPadding } : {}),
                      ...(isLast ? { paddingRight: utmostPadding } : {}),
                    }}
                  >
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        gap: "7px",
                        height: tableHeaderHeight,
                        justifyContent: headerAlign,
                      }}
                    >
                      <Box component="span">
                        {flexRender(h.column.columnDef.header, h.getContext())}
                      </Box>
                      {!isLast && (
                        <Box
                          onMouseDown={h.getResizeHandler()}
                          onTouchStart={h.getResizeHandler()}
                          sx={{
                            // backgroundColor: borderColor,
                            borderRight: `2px ${
                              canResize ? "solid" : "dotted"
                            } ${borderColor}`,
                            cursor: canResize ? "col-resize" : "default",
                            height: "100%",
                            touchAction: "none",
                            userSelect: "none",
                            // width: `${canResize ? 2 : 1}px`,
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, i, cells) => {
                const isFirst = i === 0;
                const isLast = i === cells.length - 1;

                return (
                  <Box
                    component="td"
                    key={cell.id}
                    sx={{
                      borderBottom: `1px solid ${borderColor}`,
                      lineHeight: "initial",
                      overflow: "hidden",
                      padding: `${paddingPx}px`,
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      ...(isFirst ? { paddingLeft: utmostPadding } : {}),
                      ...(isLast ? { paddingRight: utmostPadding } : {}),
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Box>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Box>
    </Widget>
  );
}
