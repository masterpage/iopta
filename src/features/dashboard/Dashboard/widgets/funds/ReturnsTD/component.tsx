import { Placeholder } from "@/components";
import { Widget, WidgetProps } from "@/features";

export function ReturnsTD(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Returns MTD/YTD">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Returns MTD/YTD
      </Placeholder>
    </Widget>
  );
}
