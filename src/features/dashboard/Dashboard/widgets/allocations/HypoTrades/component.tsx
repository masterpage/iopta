import { Placeholder } from "@/components";
import { Widget, WidgetProps } from "@/features";

export function HypoTrades(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="HypoTrades">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Hypothetical Trades
      </Placeholder>
    </Widget>
  );
}
