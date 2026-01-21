import { useState } from "react";
import type { ColDef, ICellRendererParams } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { ThemedAgGrid } from "@/components/ThemedAgGrid";
import { Order, orders, OrderSide, OrderStatus } from "src/data";
import { Lozenge } from "../ThemedAgGrid/formatters/Lozenge";
import {
  deepOrange,
  green,
  grey,
  blue,
  pink,
  cyan,
  lime,
} from "@mui/material/colors";

ModuleRegistry.registerModules([AllCommunityModule]);

export function OrdersTable() {
  const [rowData] = useState<Order[]>(orders);
  const [columnDefs] = useState<ColDef<Order>[]>([
    { field: "orderId", headerName: "Order ID" },
    { field: "createdAt", headerName: "Created" },
    { field: "broker", width: 160 },
    {
      field: "side",
      cellRenderer: ({ value }: ICellRendererParams<Order, OrderSide>) =>
        Lozenge<OrderSide>({
          value,
          options: {
            colorMap: { BUY: green, SELL: deepOrange },
          },
        }),
      width: 80,
    },
    {
      field: "orderQty",
      headerName: "Qty",
      type: "numericColumn",
      width: 100,
    },
    {
      field: "filledQty",
      type: "numericColumn",
      width: 100,
    },
    {
      field: "status",
      width: 160,
      cellRenderer: ({ value }: ICellRendererParams<Order, OrderStatus>) => {
        return Lozenge<OrderStatus>({
          value,
          options: {
            colorMap: {
              ACCEPTED: green,
              CANCELLED: grey,
              FILLED: cyan,
              NEW: blue,
              PARTIALLY_FILLED: lime,
              REJECTED: pink,
            },
            format: (v) => {
              if (!v) return "";

              let formatted: string = v;

              if (v === "PARTIALLY_FILLED") {
                formatted = "part.filled";
              }

              return formatted.replace(/_/g, " ").toUpperCase();
            },
          },
        });
      },
    },
    { field: "orderType", width: 120 },
    { field: "fund" },
    { field: "lastUpdatedAt", headerName: "Last updated" },
    { field: "security", width: 140 },
    {
      cellDataType: "currency",
      field: "limitPrice",
      type: "currency",
    },
    { field: "portfolio" },
    { field: "securityType" },
    { field: "rejectReason" },
    { field: "strategy" },
    { field: "timeInForce" },
    { field: "trader" },
  ]);

  return (
    <ThemedAgGrid<Order> {...{ columnDefs, rowData }} domLayout="autoHeight" />
  );
}
