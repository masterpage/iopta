import { useMemo } from "react";

import {
  AppBar,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";

import { usePathname } from "next/navigation";

import { type PageUri } from "@/components";
import { PageMenu } from "./PageMenu";
import { PageTabs } from "./PageTabs";
import { IoptaLogo } from "./IoptaLogo";

export function Header() {
  const pathname = usePathname();
  const currentRoute = pathname?.substring(1).split("/");
  const currentPage = `/${currentRoute?.[0]}` as PageUri;
  const isHomePage = currentPage === "/";

  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const theme = useTheme();
  const {
    breakpoints,
    palette: { background },
  } = theme;
  const isDownSm = useMediaQuery(breakpoints.down("sm"));

  /**
   * To serve Hero (with dark background) on home page, Header must use color mode opposite to default
   */
  const oppositeModeTheme = useMemo(() => {
    return createTheme({
      ...theme,
      palette: {
        mode: theme.palette.mode,
      },
    });
  }, [isHomePage, isScrolled, theme]);

  return (
    <ThemeProvider theme={oppositeModeTheme}>
      <AppBar
        elevation={isScrolled ? 4 : 0}
        position="sticky"
        sx={{ backgroundColor: isScrolled ? background.paper : "unset" }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              paddingTop: "env(safe-area-inset-top)",
            }}
          >
            <PageMenu />
            <Box
              sx={{
                display: "flex",
                flexBasis: { xs: "150px" },
                flexGrow: { sm: 0, xs: 1 },
                flexShrink: 0,
                justifyContent: { sm: "unset", xs: "center" },
              }}
            >
              <IoptaLogo
                {...(isHomePage ? {} : { href: "/" })}
                deviceOnly={isDownSm}
                envBadge
                exclusion="y"
                resize={{ height: 32 }}
              />
            </Box>
            <Box
              component="nav"
              sx={{
                alignSelf: "flex-end",
                display: {
                  sm: "flex",
                  xs: "none",
                },
                flex: "1 1 auto",
                justifyContent: "center",
              }}
            >
              <PageTabs />
            </Box>
            <Box
              sx={{
                alignSelf: "center",
                display: "flex",
                flexBasis: { sm: "150px", xs: "100px" },
                flexGrow: 0,
                flexShrink: 0,
                justifyContent: "flex-end",
                maxWidth: "150px",
              }}
            >
              &nbsp;
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
