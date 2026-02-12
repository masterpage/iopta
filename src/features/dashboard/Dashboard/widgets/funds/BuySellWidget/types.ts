type BuySellByAssetClass = Partial<
  Record<
    | "Commodities"
    | "Credit"
    | "Derivatives"
    | "Equity"
    | "FX"
    | "Private"
    | "Rates",
    number
  >
>;

type BuySellVenueMix = Record<"ATS" | "Dark" | "Lit", number>;

type BuySellBySide = Record<"buy" | "sell", number>;

export interface BuySell {
  avgTradeSizeMM: number;
  byAssetClass: BuySellByAssetClass;
  bySideCounts: BuySellBySide;
  commissionsK: number;
  filledOrders: number;
  fillRatePct: number;
  fund: string;
  largestTradeMM: number;
  netFlowMM: number;
  numOrders: number;
  pendingNotionalMM: number;
  primaryBroker: string;
  slippageBps_vsArrival: number;
  strategy: string;
  topInstruments: string[];
  totalBuysMM: number;
  totalSellsMM: number;
  tradeTags: string[];
  venueMix: BuySellVenueMix;
}
