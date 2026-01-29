import { Placeholder, Widget, WidgetProps } from "@/components";

export function Liability(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Liability">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Liability
      </Placeholder>
    </Widget>
  );
}
