import { Placeholder, Widget, WidgetProps } from "@/components";

export function DealersBuySell(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Buy/Sell">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Buy/Sell
      </Placeholder>
    </Widget>
  );
}
