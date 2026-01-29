import { Dispatch, SetStateAction } from "react";

import { DashType, MarketType } from "@/features";

export interface ContextUiMarket {
  currentMarketType: MarketType;
  setCurrentMarketType: Dispatch<
    SetStateAction<ContextUiMarket["currentMarketType"]>
  >;
}

export interface ContextUi {
  currentDashType: DashType;
  setCurrentDashType: Dispatch<SetStateAction<ContextUi["currentDashType"]>>;
  market: ContextUiMarket;
}

export interface UiProviderProps {
  slug?: string;
}
