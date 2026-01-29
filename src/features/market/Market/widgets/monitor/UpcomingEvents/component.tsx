import  { Placeholder, Widget, WidgetProps } from "@/components";

export function UpcomingEvents(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Upcoming Events">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Upcoming Events
      </Placeholder>
    </Widget>
  );
}