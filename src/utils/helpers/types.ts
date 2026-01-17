import { ReactNode } from "react";

export type Smcp = (
  node: ReactNode,
  options?: SmcpOptions
) => ReactNode | ReactNode[];

export interface SmcpOptions {
  allCaps?: boolean;
}
