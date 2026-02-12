import { Placeholder, Widget, type WidgetProps } from "@/components";

export function BuySellWidget(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Buy/Sell">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Buy/Sell
      </Placeholder>
    </Widget>
  );
}
