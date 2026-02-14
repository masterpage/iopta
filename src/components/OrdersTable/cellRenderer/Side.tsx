import { ICellRendererParams } from "ag-grid-community";
import { useTheme } from "@mui/material";

import { Lozenge } from "@/components";
import { Order, OrderSide } from "src/data";

export function CellRendererSide(props: ICellRendererParams<Order, OrderSide>) {
  const { value } = props;
  const {
    palette: { buy, sell },
  } = useTheme();

  return Lozenge<OrderSide>({
    value,
    options: {
      colorMap: { BUY: buy.main, SELL: sell.main },
    },
  });
}
