import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { type Page } from "@/components";
import { DEFAULT_MARKETTYPE, pages } from "@/consts";
import { isLooseMarketTypeExist, MarketType } from "@/features";
import { getPageTitle } from "@/utils";

import MarketPage from "./MarketPage";
import { MarketPageProps } from "./types";

const pageMarket =
  pages.find((p) => p.label === "Market") ??
  ({
    label: "Market",
    uri: "/market",
  } satisfies Page);

const { label: MARKET, uri: marketUri } = pageMarket;

export async function generateMetadata({
  params,
}: MarketPageProps): Promise<Metadata> {
  const { slug = [] } = (await params) || {};
  const [slugMarketType = DEFAULT_MARKETTYPE] = slug.map((s) =>
    s?.toLowerCase()
  ) as [MarketType, string];
  const description: Metadata["description"] = MARKET;
  const title: Metadata["title"] = getPageTitle([MARKET, slugMarketType]);

  return {
    description,
    title,
  };
}

export default async function Page({ params }: MarketPageProps) {
  const { slug = [] } = (await params) || {};
  const [slugMarketType, ...restSlug] = slug.map((s) => s?.toLowerCase()) as [
    MarketType,
    string
  ];
  const isMarketMarketType = isLooseMarketTypeExist(slugMarketType);

  if (!isMarketMarketType || restSlug.length) {
    notFound();
  }

  /**
   * Undefined `slugMarketType` refers to _Market_ home (or DEFAULT_MARKETTYPE).
   */
  if (!slugMarketType) {
    const defaultMarketType = DEFAULT_MARKETTYPE.toLowerCase();
    const defaultMarketPath = [marketUri, defaultMarketType].join("/");

    redirect(defaultMarketPath);
  }

  return <MarketPage />;
}
