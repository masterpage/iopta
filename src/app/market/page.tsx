import { Metadata } from "next";

import { pages } from "@/consts";
import { getPageTitle } from "@/utils";

import MarketPage from "./MarketPage";

const { label: MARKET } = pages.find((p) => p.uri === "/market") ?? {
  label: "Unkn.",
};

export async function generateMetadata(): Promise<Metadata> {
  const description: Metadata["description"] = MARKET;
  const title: Metadata["title"] = getPageTitle([MARKET]);

  return {
    description,
    title,
  };
}

export default function Page() {
  return <MarketPage />;
}
