import { Placeholder } from "@/components";
import { Widget, WidgetProps } from "@/features";

export function ReturnsLast(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Returns" subTitle="Last 12mo">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Returns last 12mo
      </Placeholder>
    </Widget>
  );
}
