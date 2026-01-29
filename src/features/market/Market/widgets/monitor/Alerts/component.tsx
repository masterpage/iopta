import  { Placeholder, Widget, WidgetProps } from "@/components";


export function Alerts(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Alerts">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Alerts
      </Placeholder>
    </Widget>
  );
}