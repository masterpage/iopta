import { Placeholder } from "@/components";
import { Widget, WidgetProps } from "@/features";

export function Analytics(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Analytics">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Analytics
      </Placeholder>
    </Widget>
  );
}
