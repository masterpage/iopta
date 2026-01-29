import  { Placeholder, Widget, WidgetProps } from "@/components";

export function VolatilityMonitor(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Volatility Monitor">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Volatility Monitor
      </Placeholder>
    </Widget>
  );
}