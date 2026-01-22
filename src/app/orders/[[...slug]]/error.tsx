'use client';

import reactStringReplace from 'react-string-replace';

import { Box, Button, Grid } from '@mui/material';

interface ErrorParams {
  error: { digest?: string; environmentName: string } & Error;
  reset: () => void;
}

export default function Error(params: ErrorParams) {
  const { error, reset } = params;
  const { message, name } = error;
  const m = reactStringReplace(message, /`(.*?)`/g, (textToWrap, i) => (
    <Box key={i} component="code" sx={{ fontSize: 'smaller' }}>
      {textToWrap}
    </Box>
  ));

  return (
    <Grid container spacing={4} sx={{ p: '6rem 0' }}>
      <Grid offset={{ sm: 3 }} size={{ sm: 6, xs: 12 }}>
        <h1>{name}</h1>
        <p>{m}</p>
        <Box sx={{ '> *': { m: 'unset', mt: '0.5em' }, mt: '1.5rem' }}>
          <Box
            component="footer"
            sx={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'end',
              mt: '3rem',
            }}
          >
            <Button disableElevation onClick={reset} variant="contained">
              Reset
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
