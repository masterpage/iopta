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
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  const [colDefs] = useState<ColDef<Row, boolean | number | string>[]>([
    { field: "make", sortable: true, sort: "asc" },
    { field: "model", sortable: true },
    { field: "price", sortable: true },
    { field: "electric", sortable: true },
  ]);
  const defaultColDef: ColDef = {
    flex: 1,
  };

  return (
    <ThemedAgGrid
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
      domLayout="autoHeight"
      rowData={rowData}
    />
  );
}
