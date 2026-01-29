import { Placeholder, Widget, WidgetProps } from "@/components";

export function FirmCategories(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Categories">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Categories
      </Placeholder>
    </Widget>
  );
}
