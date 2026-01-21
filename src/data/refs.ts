export type Exchange = "NASDAQ";

export type SecurityIssuer = "US Treasury";

export type SecurityType = "Bond" | "Equity" | "FX Spot";

export interface Security {
  cusip?: string;
  exchange?: Exchange;
  issuer?: SecurityIssuer;
  ticker?: string;
  type: string;
}

export const securities: Security[] = [
  { cusip: "91282CEJ6", issuer: "US Treasury", type: "Bond" },
  { exchange: "NASDAQ", ticker: "AAPL", type: "Equity" },
  { exchange: "NASDAQ", ticker: "ATVI", type: "Equity" },
  { ticker: "EUR/USD", type: "FX Spot" },
];

export const strategies: string[] = [
  "HY Relative Value",
  "Long Tech Momentum",
  "Macro FX Momentum",
  "Merger Arbitrage",
];

export const brokers: string[] = [
  "Barclays",
  "Citadel Securities",
  "Goldman Sachs",
  "HSBC",
  "J.P. Morgan",
];
