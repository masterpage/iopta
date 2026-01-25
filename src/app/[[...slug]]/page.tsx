import { Metadata, Viewport } from "next";

import { IOPTA, MASTERPAGE } from "@/consts";
import { getPageTitle } from "@/utils";

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

export default function Page() {
  return <HomePage />;
}

export const viewport: Viewport = {
  themeColor: [{ color: "transparent" }],
};
