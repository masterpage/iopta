import { SecurityType } from "./refs";

export interface Position {
  avgCost: number;
  marketPrice: number;
  portfolio: string;
  quantity: number;
  security: string;
  securityType?: SecurityType;
  unrealizedPnL: number;
}

export const positions: Position[] = [
  {
    avgCost: 1.1185,
    marketPrice: 1.1192,
    portfolio: "GMF-Alpha",
    quantity: 2000000,
    security: "EUR/USD",
    securityType: "FX Spot",
    unrealizedPnL: 1400,
  },
  {
    avgCost: 227.44,
    marketPrice: 224.9,
    portfolio: "ELS-Tech",
    quantity: -25000,
    security: "AAPL",
    securityType: "Equity",
    unrealizedPnL: 63500,
  },
  {
    avgCost: 93.1,
    marketPrice: 94.8,
    portfolio: "MSR-EventDriven",
    quantity: 150000,
    security: "ATVI",
    securityType: "Equity",
    unrealizedPnL: 255000,
  },
];

export const positionsEod260112: Position[] = [
  {
    avgCost: 1.1181,
    marketPrice: 1.1188,
    portfolio: "GMF-Alpha",
    quantity: 1000000,
    security: "EUR/USD",
    unrealizedPnL: 700,
  },
  {
    avgCost: 223.35,
    marketPrice: 224.1,
    portfolio: "ELS-Tech",
    quantity: -18000,
    security: "AAPL",
    unrealizedPnL: -13500,
  },
];

export const positionsEod260113: Position[] = [
  {
    avgCost: 1.1181,
    marketPrice: 1.1194,
    portfolio: "GMF-Alpha",
    quantity: 1000000,
    security: "EUR/USD",
    unrealizedPnL: 1300,
  },
  {
    avgCost: 146.2,
    marketPrice: 146.05,
    portfolio: "GMF-Alpha",
    quantity: -2000000,
    security: "USD/JPY",
    unrealizedPnL: 30000,
  },
  {
    avgCost: 455.14,
    marketPrice: 456.05,
    portfolio: "MSR-Quant",
    quantity: 4000,
    security: "NFLX",
    unrealizedPnL: 3640,
  },
];

export const positionsEod260114: Position[] = [
  {
    avgCost: 160.2,
    marketPrice: 160.8,
    portfolio: "ELS-Value",
    quantity: 6000,
    security: "PG",
    unrealizedPnL: 3600,
  },
  {
    avgCost: 71.6,
    marketPrice: 71.45,
    portfolio: "CMO-Energy",
    quantity: 20,
    security: "CLG6",
    unrealizedPnL: -300,
  },
];

export const positionsEod260115: Position[] = [
  {
    avgCost: 92.85,
    marketPrice: 93.55,
    portfolio: "MSR-EventDriven",
    quantity: 90000,
    security: "ATVI",
    unrealizedPnL: 63000,
  },
  {
    avgCost: 372.4,
    marketPrice: 373.1,
    portfolio: "ELS-Tech",
    quantity: -3000,
    security: "MSFT",
    unrealizedPnL: -2100,
  },
];

export const positionsEod260116: Position[] = [
  {
    avgCost: 99.4,
    marketPrice: 99.55,
    portfolio: "CRO-HY",
    quantity: 1500000,
    security: "US91282CDL99",
    unrealizedPnL: 22500,
  },
  {
    avgCost: 55.12,
    marketPrice: 55.0,
    portfolio: "MSR-Quant",
    quantity: -15000,
    security: "KO",
    unrealizedPnL: -1800,
  },
];
