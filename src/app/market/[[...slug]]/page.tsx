import { Metadata } from "next";
import { notFound } from "next/navigation";

import { pages } from "@/consts";
import { MarketType } from "@/features";
import { getPageTitle } from "@/utils";

import MarketPage from "./MarketPage";
import { MarketPageProps } from "./types";

const { label: MARKET } = pages.find((p) => p.uri === "/market") ?? {
  label: "Unkn.",
};

export async function generateMetadata({
  params,
}: MarketPageProps): Promise<Metadata> {
  const { slug = [] } = (await params) || {};
  const [slugMarketType] = slug.map((s) => s?.toLowerCase()) as [
    MarketType,
    string
  ];
  const description: Metadata["description"] = MARKET;
  const title: Metadata["title"] = getPageTitle([MARKET, slugMarketType]);

  return {
    description,
    title,
  };
}

export default async function Page({ params }: MarketPageProps) {
  const { slug = [] } = (await params) || {};
  const [, ...restSlug] = slug.map((s) => s?.toLowerCase()) as [
    MarketType,
    string
  ];

  if (restSlug.length) {
    notFound();
  }
  return <MarketPage />;
}
