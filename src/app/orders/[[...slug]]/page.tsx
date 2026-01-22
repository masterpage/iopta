import { Metadata } from "next";
import { notFound } from "next/navigation";

import { StyledPage } from "@/components/StyledPage";
import { Grid } from "@mui/material";
import { ContentPage } from "@/app/ContentPage";
import { gridSettings } from "@/components/GridWrap";
import { OrdersPageProps } from "./types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    description: "Orders",
    title: "Orders",
  };
}

export default async function OrdersPage({ params }: OrdersPageProps) {
  const { slug = [] } = (await params) || {};
  const [...restSlug] = slug.map((s) => s?.toLowerCase());

  if (restSlug.length) {
    notFound();
  }

  return (
    <StyledPage fullBleed>
      <header>
        <Grid columnSpacing={4}>
          <Grid component="h1" {...gridSettings}>
            Orders
          </Grid>
        </Grid>
      </header>
      <main>
        <ContentPage />
      </main>
    </StyledPage>
  );
}
