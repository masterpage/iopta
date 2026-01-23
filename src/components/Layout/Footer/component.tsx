import { useEffect, useRef, useState } from "react";

import { Box, Container, Grid, useTheme } from "@mui/material";

import { Global } from "@emotion/react";

import { Version } from "@/components";
import { IOPTA } from "@/consts";
import { isTest } from "@/utils";

type Rect = Record<"height" | "width", number>;

export function Footer() {
  const root = useRef<HTMLElement>(null);
  const [bodyMarginOffset, setBodyMarginOffset] = useState(0);
  const theme = useTheme();
  const {
    breakpoints: { down, only },
    palette: { text },
    typography,
  } = theme;

  useEffect(() => {
    const { current: globalFooter } = root;

    if (!globalFooter) return undefined;

    const resizeObserver = new ResizeObserver((entries) => {
      /**
       * Sticky footer height recalc.
       * @param footerRect - Footer height and width in _px_.
       */
      const handleResize = (footerRect?: Rect): void => {
        const { clientHeight } = globalFooter;

        if (!clientHeight) return;

        const footerHeight = Math.ceil(
          footerRect ? footerRect.height : clientHeight
        );

        setBodyMarginOffset(footerHeight);
      };

      const { blockSize: height, inlineSize: width } =
        entries[0].borderBoxSize[0];
      handleResize({ height, width });
    });

    resizeObserver.observe(globalFooter);

    return () => {
      resizeObserver.unobserve(globalFooter);
    };
  });

  return (
    <Box
      ref={root}
      component="footer"
      sx={{
        alignItems: "center",
        bottom: 0,
        color: text.primary,
        fontSize: typography.body1.fontSize,
        left: 0,
        paddingRight: "inherit",
        position: "absolute",
        width: "inherit",
      }}
    >
      <Global
        styles={{
          body: {
            paddingBottom: `${bodyMarginOffset}px`,
          },
        }}
      />
      <Box
        component="header"
        sx={{
          paddingBottom: "2rem",
          paddingTop: "2rem",
        }}
      >
        <Container>
          <Grid
            container
            size={{ xs: 12 }}
            sx={{
              [only("xs")]: {
                justifyContent: "center",
              },
            }}
          ></Grid>
        </Container>
      </Box>
      <Box
        component="main"
        sx={{
          borderTop: `1px solid ${text.disabled}`,
        }}
      >
        <Container>
          <Grid
            container
            data-testid="legal"
            size={{ md: 9, xs: 12 }}
            sx={{
              alignItems: "flex-start",
              display: "flex",
              [down("sm")]: {
                alignItems: "baseline",
                flexDirection: "column-reverse",
              },
              gap: "1.5em",
              [only("xs")]: {
                alignItems: "center",
                flexDirection: "column-reverse",
              },
              padding: "2em 0 max(1em, env(safe-area-inset-bottom))",
            }}
          >
            <Grid
              data-testid="copyright"
              size={{ sm: "auto", xs: 12 }}
              sx={{
                alignItems: "flex-end",
                display: "flex",
                [down("sm")]: {
                  alignItems: "baseline",
                  flexDirection: "row",
                },
                flexDirection: "column",
                gap: "0.25em",
                [only("xs")]: {
                  alignItems: "center",
                  flexDirection: "column",
                },
                whiteSpace: "nowrap",
              }}
            >
              <Grid>
                &copy;{" "}
                <Box component="span" data-testid="CopyrightYear">
                  {isTest ? "0000" : new Date().getFullYear()}
                </Box>{" "}
                {IOPTA}
              </Grid>
              <Version isEnv isVersion />
            </Grid>
            <Grid data-testid="actions" size={{ sm: "auto", xs: 12 }}>
              Legal Actions
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
