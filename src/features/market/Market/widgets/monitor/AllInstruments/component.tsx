import  { Placeholder,Widget, WidgetProps } from "@/components";


export function AllInstruments(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="All Instruments">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        All Instruments
      </Placeholder>
    </Widget>
  );
}