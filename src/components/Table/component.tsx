import { useState } from "react";
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { ThemedAgGrid } from "@/components/ThemedAgGrid";

ModuleRegistry.registerModules([AllCommunityModule]);

interface Row {
  electric: boolean;
  make: string;
  model: string;
  price: number;
}

export function Table() {
  const [rowData] = useState<Row[]>([
    { electric: true, make: "Tesla", model: "Model Y", price: 64950 },
    { electric: false, make: "Ford", model: "F-Series", price: 33850 },
    { electric: false, make: "Toyota", model: "Corolla", price: 29600 },
  ]);
  const [columnDefs] = useState<ColDef<Row>[]>([
    { field: "make", sort: "asc", sortable: true },
    { field: "model", sortable: true },
    {
      cellDataType: "currency",
      type: "currency",
      field: "price",
      sortable: true,
    },
    { field: "electric", sortable: true },
  ]);

  return (
    <ThemedAgGrid<Row> {...{ columnDefs, rowData }} domLayout="autoHeight" />
  );
}
