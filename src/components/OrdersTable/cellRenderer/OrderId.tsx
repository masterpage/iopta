import { ICellRendererParams } from "ag-grid-community";

import { Id } from "@/components";
import { Order } from "src/data";

export function CellRendererOrderId(props: ICellRendererParams<Order, string>) {
  const { value } = props;

  if (!value) return "";

  const [, , id] = value?.split("-");

  return Id({ value: id });
}
