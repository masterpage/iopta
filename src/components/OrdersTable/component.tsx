import { useState } from "react";
import type { ColDef, ICellRendererParams } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import {
  formatDateSettings,
  Id,
  Lozenge,
  ThemedAgGrid,
} from "@/components/ThemedAgGrid";
import { Order, orders, OrderSide, OrderStatus } from "src/data";
import {
  deepOrange,
  green,
  grey,
  blue,
  pink,
  cyan,
  lime,
} from "@mui/material/colors";
import { SecurityDialog } from '../SecurityDialog';

ModuleRegistry.registerModules([AllCommunityModule]);

export function OrdersTable() {
  const [rowData] = useState<Order[]>(orders);
  const [selectedSecurity, setSelectedSecurity] = useState<string | null>(null);
  const [columnDefs] = useState<ColDef<Order>[]>([
    {
      field: "orderId",
      headerName: "Order ID",
      cellRenderer: ({ value }: ICellRendererParams<Order, string>) => {
        if (!value) return "";

        const [, , id] = value?.split("-");

        return Id({ value: id });
      },
      width: 90,
    },
    {
      field: "createdAt",
      headerName: "Created",
      ...formatDateSettings,
    },
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
    {
      field: "lastUpdatedAt",
      headerName: "Last updated",
      ...formatDateSettings,
    },
    {
      field: "security",
      width: 140,
      onCellClicked(event) {
        setSelectedSecurity(event.value);
      },

      cellRenderer: ({ value }: ICellRendererParams<Order, string>) => {
        if (!value) return "";

        return Id({
          value,

          sx: {
            cursor: "pointer",
            textDecoration: "underline",
          },
        });
      },
    },
    {
      cellDataType: "currency",
      field: "limitPrice",
      type: "currency",
      width: 140,
    },
    { field: "portfolio" },
    { field: "securityType" },
    { field: "rejectReason" },
    { field: "strategy" },
    { field: "timeInForce" },
    { field: "trader" },
  ]);

  return (
    <>
      <ThemedAgGrid<Order>
        {...{ columnDefs, rowData }}
        domLayout="autoHeight"
      />
      <SecurityDialog
        security={selectedSecurity}
        onClose={() => setSelectedSecurity(null)}
      />
    </>
  );
}
