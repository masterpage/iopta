import { PropsWithChildren } from "react";

import { PaletteMode } from "@mui/material";

import { Metadata, Viewport } from "next";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { Organization, WithContext } from "schema-dts";

import { getFaviconFileName } from "@/components/Layout/getFaviconFileName";
import { IOPTA, MASTERPAGE } from "@/consts";
import { Layout } from "@/components";
import { Providers } from "@/context";

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  width: "device-width",
};

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "IN",
  },
  description: `A show-case app to demo user interface implementation best-practices for fintech industry.`,
  email: "hello@masterpage.com",
  foundingDate: "2006-02-02",
  foundingLocation: "London, United Kingdom",
  legalName: "MSPG, Inc.",
  logo: "https://www.masterpage.com/logo.png",
  naics: ["513210", "541430", "541511", "541512"],
  name: [IOPTA, "iopta.com"],
  parentOrganization: MASTERPAGE,
  slogan: "Puissance. Plaisir. Lumière.",
  url: "https://www.iopta.com",
};

export default async function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <script
          /**
           * @see [JSON-LD](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld) use in Next.js
           */
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}

const icon: Icon[] = (["dark", "light"] as PaletteMode[]).map((m) => ({
  media: `(prefers-color-scheme: ${m})`,
  rel: "icon",
  url: `/favicon/${getFaviconFileName(m)}`,
}));

export const metadata: Metadata = {
  icons: { icon },
};
