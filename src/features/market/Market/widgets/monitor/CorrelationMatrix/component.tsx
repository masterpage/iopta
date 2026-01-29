import  { Placeholder, Widget, WidgetProps } from "@/components";

export function CorrelationMatrix(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Correlation Matrix">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Correlation Matrix
      </Placeholder>
    </Widget>
  );
}