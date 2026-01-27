import { Placeholder } from "@/components";
import { Widget, WidgetProps } from "@/features";

export function FirmCategories(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Categories">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Categories
      </Placeholder>
    </Widget>
  );
}
