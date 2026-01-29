import { Placeholder, Widget, WidgetProps } from "@/components";

export function EquityAndLeverage(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Equity and Leverage" subTitle="Last 12mo">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Equity and Leverage
      </Placeholder>
    </Widget>
  );
}
