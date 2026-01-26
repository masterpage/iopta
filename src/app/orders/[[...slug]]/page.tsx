import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Grid } from "@mui/material";

import { StyledPage, gridSettings } from "@/components";
import { pages } from "@/consts";
import { getPageTitle } from "@/utils";

import { OrdersPage } from "./OrdersPage";
import { OrdersPageProps } from "./types";

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

export default async function Page({ params }: OrdersPageProps) {
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
