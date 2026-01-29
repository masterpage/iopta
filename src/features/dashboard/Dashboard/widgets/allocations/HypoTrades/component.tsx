import { Placeholder, Widget, WidgetProps } from "@/components";

export function HypoTrades(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="HypoTrades">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Hypothetical Trades
      </Placeholder>
    </Widget>
  );
}
