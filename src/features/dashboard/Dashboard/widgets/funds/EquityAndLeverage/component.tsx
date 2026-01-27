import { Placeholder } from "@/components";
import { Widget, WidgetProps } from "@/features";

export function EquityAndLeverage(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Equity and Leverage">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Equity and Leverage
      </Placeholder>
    </Widget>
  );
}
