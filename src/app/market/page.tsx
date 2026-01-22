import { Metadata } from "next";

import { getPageTitle } from "@/utils/page";

import { IOPTA } from "../consts";
import MarketPage from "./MarketPage";

export async function generateMetadata(): Promise<Metadata> {
  const title: Metadata["title"] = getPageTitle(["Contact"]);

  return {
    description: `${IOPTA} Contact`,
    title,
  };
}

export default function Page() {
  return <MarketPage />;
}
