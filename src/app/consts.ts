import { type Page } from "@/components";
import { DashType } from "@/features";

export const MASTERPAGE = "Masterpage";
export const IOPTA = "iOpta";

export const pages: Page[] = [
  { label: "Market", uri: "/market" },
  { label: "Orders", uri: "/orders" },
];

export const DEFAULT_DASHTYPE = DashType.FUNDS;
