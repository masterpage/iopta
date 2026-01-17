import { PropsWithChildren, ReactElement } from "react";

import { Box, Grid } from "@mui/material";

import { HttpStatus, status } from "http-status";
import { ActionFooter } from "./ActionFooter";

interface HttpErrorProps {
  actions?: ReactElement<PropsWithChildren>;
  cause?: string;
  statusCode: keyof HttpStatus;
  title?: string;
}

export function HttpError(props: PropsWithChildren<HttpErrorProps>) {
  const { actions, cause, children, statusCode, title } = props;
  const header = title || (
    <>
      {status[statusCode]}{" "}
      <Box component="span" sx={{ fontSize: "smaller", fontWeight: 600 }}>
        ({statusCode})
      </Box>
    </>
  );

  return (
    <Grid container spacing={4} sx={{ p: "6rem 0" }}>
      <Grid offset={{ sm: 3 }} size={{ sm: 6, xs: 12 }}>
        <h1>{header}</h1>
        {cause && (
          <Box component="code" sx={{ fontSize: "smaller" }}>
            {cause}
          </Box>
        )}
        {children}
        <ActionFooter>{actions}</ActionFooter>
      </Grid>
    </Grid>
  );
}
