import { Metadata } from "next";
import { notFound } from "next/navigation";

import { StyledPage } from "@/components/StyledPage";
import { Grid } from "@mui/material";
import { gridSettings } from "@/components/GridWrap";
import { OrdersPageProps } from "./types";
import { getPageTitle } from "@/utils";
import { pages } from "@/components/Layout/Header/consts";
import { OrdersPage } from "./OrdersPage";

const { label: ORDERS } = pages.find((p) => p.uri === "/orders") ?? {
  label: "Unkn.",
};
export async function generateMetadata(): Promise<Metadata> {
  const description: Metadata["description"] = ORDERS;
  const title: Metadata["title"] = getPageTitle([ORDERS]);

  return {
    description,
    title,
  };
}

export default async function Orders({ params }: OrdersPageProps) {
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
        <OrdersPage />
      </main>
    </StyledPage>
  );
}
