import { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import { IOPTA, MASTERPAGE } from "@/consts";
import { DashType } from "@/features";
import { getPageTitle } from "@/utils";

import { DashTypeSlug, HomePageProps } from "./types";
import { HomeProvider } from "./contextHome";
import { HomePage } from "./HomePage";

export async function generateMetadata(): Promise<Metadata> {
  const description: Metadata["description"] = `${MASTERPAGE} are the American boutique front-end and experience consultants. We design and build beautiful interfaces for web, mobile and desktop.`;
  const title: Metadata["title"] = getPageTitle();

  return {
    description,
    openGraph: {
      description,
      siteName: IOPTA,
      title,
      type: "website",
      url: "https://www.iopta.com",
    },
    robots: "index, follow",
    title,
  };
}

export default async function Page({ params }: HomePageProps) {
  const { slug = [] } = (await params) || {};
  const [slugDashType, ...restSlug] = slug.map((s) =>
    s?.toLowerCase()
  ) as DashTypeSlug;
  const isSlugDashType: boolean = Boolean(
    /** Empty slug will be defaulted into DEFAULT_DASHTYPE by `ContextHome` */
    !slugDashType ||
      Object.values(DashType).filter(
        (dt) => dt.toLowerCase() === slugDashType.toLowerCase()
      ).length
  );

  if (!isSlugDashType || restSlug.length) {
    notFound();
  }

  return (
    <HomeProvider slugDashType={slugDashType}>
      <HomePage />
    </HomeProvider>
  );
}

export const viewport: Viewport = {
  themeColor: [{ color: "transparent" }],
};
