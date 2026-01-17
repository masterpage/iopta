'use client';

import { useEffect, useState } from 'react';

import { PaletteMode } from '@mui/material';

/**
 * @returns Browser-preferred color scheme.
 * @default `light`
 */
export const usePaletteMode = (): PaletteMode | null => {
  const [mode, setMode] = useState<PaletteMode | null>(null);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent): void => {
      setMode(event.matches ? 'dark' : 'light');
    };

    setMode(matchMedia.matches ? 'dark' : 'light');
    matchMedia.addEventListener<'change'>('change', listener);

    return () => matchMedia.removeEventListener<'change'>('change', listener);
  }, []);

  return mode;
};
