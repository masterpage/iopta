import { ButtonProps } from '@mui/material';

import { UseMasterpageLogoParams } from './useMasterpageLogo/types';

export type MasterpageLogoDeviceSize = 'large' | 'small';
export interface MasterpageLogoProps
  extends Omit<ButtonProps, 'size' | 'variant'> {
  deviceOnly?: boolean;
  /**
   * Sets logo device height.
   * @default small
   */
  deviceSize?: MasterpageLogoDeviceSize;
  /**
   * @default false
   */
  envBadge?: boolean;
  exclusion?: 'x' | 'xy' | 'y';
  /**
   * Scales logo.
   * @default { scale: 1 }
   */
  resize?: UseMasterpageLogoParams;
  /**
   * Sets logo color.
   * @default rainbow
   */
  variant?: MasterpageLogoVariant;
}

export type MasterpageLogoVariant = 'mono' | 'rainbow';
