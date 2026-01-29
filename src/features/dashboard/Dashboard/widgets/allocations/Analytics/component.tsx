import { Placeholder, Widget, WidgetProps } from "@/components";

export function Analytics(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Analytics">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Analytics
      </Placeholder>
    </Widget>
  );
}
