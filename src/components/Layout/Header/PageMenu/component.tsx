import { useState } from 'react';

import { Box, BoxProps, Container, Drawer } from '@mui/material';

import { PageTabs } from '../PageTabs';
import { Hamburger } from './Hamburger';

export function PageMenu(p: Readonly<BoxProps>) {
  const [isHamburderOpened, setIsHamburderOpened] = useState(false);

  return (
    <Box
      sx={{
        display: {
          sm: 'none',
          xs: 'flex',
        },
        flex: '0 0 100px',
      }}
      {...p}
    >
      <Hamburger
        onClick={() => setIsHamburderOpened(!isHamburderOpened)}
        open={isHamburderOpened}
      />
      <Drawer
        onClose={() => setIsHamburderOpened(false)}
        open={isHamburderOpened}
        sx={{
          display: {
            md: 'none',
            xs: 'block',
          },
        }}
      >
        <Container
          sx={{ alignItems: 'center', display: 'flex', height: '4.5rem' }}
        >
          <Hamburger
            onClick={() => setIsHamburderOpened(!isHamburderOpened)}
            open={isHamburderOpened}
            title="Close drawer"
          />
        </Container>
        <PageTabs
          onClick={() => setIsHamburderOpened(false)}
          orientation="vertical"
          slotProps={{
            list: { sx: { alignItems: 'end' } },
          }}
          sx={{ minWidth: '150px' }}
        />
      </Drawer>
    </Box>
  );
}
