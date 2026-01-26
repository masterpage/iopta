import { PropsWithChildren } from "react";
import { UiProvider } from "./ui";

export function Providers(props: PropsWithChildren) {
  const { children } = props;

  return <UiProvider>{children}</UiProvider>;
}
