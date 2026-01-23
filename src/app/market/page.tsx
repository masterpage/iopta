import { Metadata } from "next";

import { getPageTitle } from "@/utils/page";

import MarketPage from "./MarketPage";
import { pages } from "@/components/Layout/Header/consts";

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
