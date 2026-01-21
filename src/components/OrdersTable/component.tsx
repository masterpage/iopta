import { useState } from "react";
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { ThemedAgGrid } from "@/components/ThemedAgGrid";
import { Order, orders } from "src/data";
import { Lozenge } from "../ThemedAgGrid/formatters/Lozenge";

ModuleRegistry.registerModules([AllCommunityModule]);

export function OrdersTable() {
  const [rowData] = useState<Order[]>(orders);
  const [columnDefs] = useState<ColDef<Order>[]>([
    { field: "orderId", headerName: "Order ID" },
    { field: "createdAt", headerName: "Created" },
    { field: "broker", width: 160 },
    {
      field: "side",
      cellRenderer: Lozenge,
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
    { field: "status", width: 160 },
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
