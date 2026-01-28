import { type Page } from "@/components";
import { DashType, MarketType } from "@/features";

export const MASTERPAGE = "Masterpage";
export const IOPTA = "iOpta";

export const pages: Page[] = [
  { label: "Market", uri: "/market" },
  { label: "Orders", uri: "/orders" },
];

export const DEFAULT_DASHTYPE = DashType.FUNDS;

export const dashTabs: DashType[] = [
  DashType.FUNDS,
  DashType.DEALERS,
  DashType.ALLOCATIONS,
];

export const DEFAULT_MARKETTYPE = MarketType.DASH;

export const marketTabs: MarketType[] = [MarketType.DASH, MarketType.WATCHLIST];
