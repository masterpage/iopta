import { Box, Tab, Tabs, TabsProps } from "@mui/material";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { PageUri } from "@/components/types";

import { pages } from "../consts";

export function PageTabs(props: Readonly<TabsProps>) {
  const { orientation, slotProps, ...restProps } = props;
  const pathname = usePathname();
  const currentRoute = pathname?.substring(1).split("/");
  const currentPage = `/${currentRoute?.[0]}` as PageUri;
  const currentPageNumber = pages.map((page) => page.uri).indexOf(currentPage);
  const isCurrentPageAmoungPredefinedPages = currentPageNumber !== -1;

  return (
    <Tabs
      centered
      id="page-tabs"
      slotProps={{
        indicator: {
          sx: { [orientation === "vertical" ? "width" : "height"]: 3 },
        },
        ...slotProps,
      }}
      value={isCurrentPageAmoungPredefinedPages && currentPageNumber}
      {...{ orientation, ...restProps }}
    >
      {pages.map(({ label, uri }) => {
        const isFirstLevelNav = currentRoute.length < 2;
        const isExhibitLevelNav = currentRoute.length < 3;
        const isCurrentPage =
          (isFirstLevelNav || isExhibitLevelNav) && currentPage === uri;

        return (
          <Tab
            key={label}
            disableRipple
            {...(isCurrentPage ? {} : { href: uri })}
            id={label}
            label={label}
            LinkComponent={isCurrentPage ? Box : NextLink}
            sx={({
              transitions: { duration },
              typography: { fontWeightBold },
            }) => ({
              ...(isCurrentPage ? { cursor: "default" } : {}),
              fontSize: "1.125rem",
              fontWeight: fontWeightBold,
              paddingBottom: "1em",
              textTransform: "unset",
              transition: `color ${duration.shorter}ms ease`,
            })}
          />
        );
      })}
    </Tabs>
  );
}
