import { ICellRendererParams } from "ag-grid-community";
import { blue, cyan, green, grey, lime, pink } from "@mui/material/colors";

import { Lozenge } from "@/components";
import { Order, OrderStatus } from "src/data";

export function CellRendererStatus(
  props: ICellRendererParams<Order, OrderStatus>,
) {
  const { value } = props;

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
}
