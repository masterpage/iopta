import  { Placeholder, Widget, WidgetProps } from "@/components";

export function LiquidityMonitor(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Liquidity Monitor">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Liquidity Monitor
      </Placeholder>
    </Widget>
  );
}