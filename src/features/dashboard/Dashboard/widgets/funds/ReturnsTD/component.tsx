import { Placeholder, Widget, WidgetProps } from "@/components";

export function ReturnsTD(props: Omit<WidgetProps, "title">) {
  return (
    <Widget {...props} title="Returns" subTitle="MTD/YTD">
      <Placeholder sx={{ backgroundColor: "unset", flex: 1 }}>
        Returns MTD/YTD
      </Placeholder>
    </Widget>
  );
}
