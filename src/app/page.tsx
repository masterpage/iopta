import { Metadata, Viewport } from "next";

import { getPageTitle } from "src/utils/page";

import { IOPTA, MASTERPAGE } from "./consts";
import { StyledPage } from "@/components/StyledPage";
import { Grid } from "@mui/material";
import { gridSettings, GridWrap } from "@/components/GridWrap";

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
  return (
    <StyledPage>
      <header>
        <Grid columnSpacing={4}>
          <Grid component="h1" {...gridSettings}>
            Header
          </Grid>
        </Grid>
      </header>
      <main>
        <GridWrap>
          <main></main>
        </GridWrap>
      </main>
    </StyledPage>
  );
}

export const viewport: Viewport = {
  themeColor: [{ color: "transparent" }],
};
