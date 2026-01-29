import { Placeholder, Widget, WidgetProps } from "@/components";

export function Allocations(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Allocations">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Allocations
      </Placeholder>
    </Widget>
  );
}
