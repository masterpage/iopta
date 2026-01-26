import { useContext } from "react";

import { UiContext } from "./UiProvider";

export function useContextUi() {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("`useHomeContext` must be used inside `HomeProvider`");
  }

  return context;
}
