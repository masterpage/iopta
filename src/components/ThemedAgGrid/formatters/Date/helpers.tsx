import type { ColDef } from "ag-grid-community";

const pad = (n: number) => n.toString().padStart(2, "0");

export function formatDateISO(date: Date): string {
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${year}-${month}-${day}, ${hours}:${minutes}`;
}

export const valueFormatterDate: ColDef["valueFormatter"] = (v) => {
  const { value } = v;
  const date = new Date(value);
  const formatted = formatDateISO(date);

  return formatted;
};

export const formatDateSettings: Pick<ColDef, "valueFormatter" | "width"> = {
  valueFormatter: valueFormatterDate,
  width: 150,
};
