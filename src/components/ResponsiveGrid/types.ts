import { type ResponsiveGridLayoutProps } from "react-grid-layout";

export type ResponsiveGridProps = Omit<ResponsiveGridLayoutProps, "width"> &
  Partial<Pick<ResponsiveGridLayoutProps, "width">>;
