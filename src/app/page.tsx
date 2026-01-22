import { Metadata, Viewport } from "next";

import { getPageTitle } from "src/utils/page";

import { IOPTA, MASTERPAGE } from "./consts";
import { Placeholder } from "@/components/Placeholder";

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

export default function Home() {
  return <Placeholder>Dashboard placeholder</Placeholder>;
}

export const viewport: Viewport = {
  themeColor: [{ color: "transparent" }],
};
