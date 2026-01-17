import { PropsWithChildren } from "react";

import { PaletteMode } from "@mui/material";

import { Metadata, Viewport } from "next";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { Organization, WithContext } from "schema-dts";

import { Layout } from "@/components/Layout";
import { getFaviconFileName } from "@/components/Layout/getFaviconFileName";

import { MASTERPAGE } from "./consts";

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
  alternateName: [MASTERPAGE, "MSPG"],
  description: `Official website of MSPG, Inc. d/b/a ${MASTERPAGE}.`,
  email: "hello@masterpage.com",
  foundingDate: "2006-02-02",
  foundingLocation: "London, United Kingdom",
  legalName: "MSPG, Inc.",
  logo: "https://www.masterpage.com/logo.png",
  naics: ["513210", "541430", "541511", "541512"],
  name: ["Masterpage®", "MSPG"],
  slogan: "Puissance. Plaisir. Lumière.",
  url: "https://www.masterpage.com",
};

export default async function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <link href="https://use.typekit.net/uog6jwu.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
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
        <Layout>{children}</Layout>
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
