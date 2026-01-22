import { Metadata, Viewport } from "next";

import { getPageTitle } from "src/utils/page";

import { IOPTA, MASTERPAGE } from "./consts";
import { Box } from "@mui/material";
import { setAlphaColor } from "@/utils";
import { pink } from "@mui/material/colors";

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
  const color = pink[100];

  return (
    <Box
      sx={{
        height: "500px",
        background: setAlphaColor(color, 0.2),
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${color}`,
      }}
    >
      <Box>Dashboard placeholder</Box>
    </Box>
  );
}

export const viewport: Viewport = {
  themeColor: [{ color: "transparent" }],
};
