import type { ColDef, ICellRendererParams } from "ag-grid-community";

import { useState } from "react";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

import { formatDateSettings, ThemedAgGrid } from "@/components/ThemedAgGrid";

import { Order, orders } from "src/data";
import { SecurityDialog, SecurityDialogProps } from "../SecurityDialog";
import {
  CellRendererOrderId,
  CellRendererSecurity,
  CellRendererSide,
  CellRendererStatus,
} from "./cellRenderer";

ModuleRegistry.registerModules([AllCommunityModule]);

export function OrdersTable() {
  const [rowData] = useState<Order[]>(orders);
  const [selectedSecurity, setSelectedSecurity] =
    useState<SecurityDialogProps["security"]>(null);
  const [columnDefs] = useState<ColDef<Order>[]>([
    {
      field: "orderId",
      headerName: "Order ID",
      cellRenderer: CellRendererOrderId,
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
      cellRenderer: CellRendererSide,
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
      cellRenderer: CellRendererStatus,
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
      cellRenderer: (params: ICellRendererParams<Order, string>) =>
        CellRendererSecurity({ ...params, setSelectedSecurity }),
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
