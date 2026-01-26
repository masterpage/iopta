import { Dispatch, SetStateAction } from "react";

import { DashType } from "@/features";

export interface ContextUi {
  currentDashType: DashType;
  setCurrentDashType: Dispatch<SetStateAction<ContextUi["currentDashType"]>>;
}

export interface UiProviderProps {
  slugDashType?: DashType;
}
