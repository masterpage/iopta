import { ReactElement } from 'react';

import { MasterpageLogoProps } from '../types';
import { SvgBox } from './component';
import { SvgBoxProps } from './types';

type DeviceProps = Omit<SvgBoxProps, 'color'> &
  Required<Pick<MasterpageLogoProps, 'deviceSize' | 'variant'>>;

export function Device(
  props: Readonly<DeviceProps>,
): ReactElement<SvgBoxProps> {
  const { deviceSize, variant, ...localSvgProps } = props;
  const deviceSvgProps: SvgBoxProps = {
    ...localSvgProps,
    viewBox: deviceSize === 'large' ? '0 0 48 48' : '0 0 40 40',
  };
  const device: Record<
    NonNullable<MasterpageLogoProps['variant']>,
    Record<
      NonNullable<MasterpageLogoProps['deviceSize']>,
      ReactElement<SvgBoxProps>
    >
  > = {
    mono: {
      large: (
        <path d="M40,28h8v20H0V0h20v8H8v32h32V28z M48,24l-8-8h-8V8l-8.02-8L24,24H48z" />
      ),
      small: (
        <path d="M32,24h8v16H0V0h16v8H8v24h24V24z M32,12h-4V8l-8-8v20h20L32,12z" />
      ),
    },
    rainbow: {
      large: (
        <>
          <rect fill="#F44336" height="8" width="8" x="0" y="0" />
          <rect fill="#DB4D43" height="8" width="8" x="8" y="0" />
          <rect fill="#C1574F" height="8" width="4" x="16" y="0" />
          <rect fill="#FBC02D" height="8" width="8" x="0" y="40" />
          <rect fill="#D6BA32" height="8" width="8" x="8" y="40" />
          <rect fill="#B1B337" height="8" width="8" x="16" y="40" />
          <rect fill="#8DAD3D" height="8" width="8" x="24" y="40" />
          <rect fill="#68A642" height="8" width="8" x="32" y="40" />
          <rect fill="#FAA72F" height="8" width="8" y="32" />
          <rect fill="#F88E31" height="8" width="8" y="24" />
          <rect fill="#F77532" height="8" width="8" y="16" />
          <rect fill="#F55C34" height="8" width="8" y="8" />
          <rect fill="#4D9750" height="8" width="8" x="40" y="32" />
          <rect fill="#578F59" height="4" width="8" x="40" y="28" />
          <rect fill="#43A047" height="8" width="8" x="40" y="40" />
          <polygon points="40,16 32,16 32,8 24,0 24,24 48,24 " />
        </>
      ),
      small: (
        <>
          <rect fill="#D45046" height="8" width="8" x="8" />
          <rect fill="#FBC02D" height="8" width="8" x="0" y="32" />
          <rect fill="#CDB834" height="8" width="8" x="8" y="32" />
          <rect fill="#9FB03A" height="8" width="8" x="16" y="32" />
          <rect fill="#71A841" height="8" width="8" x="24" y="32" />
          <rect fill="#43A047" height="8" width="8" x="32" y="32" />
          <rect fill="#F9A12F" height="8" width="8" y="24" />
          <rect fill="#F88232" height="8" width="8" y="16" />
          <rect fill="#F66234" height="8" width="8" y="8" />
          <rect fill="#F44336" height="8" width="8" />
          <rect fill="#509553" height="8" width="8" x="32" y="24" />
          <polygon points="32,12 28,12 28,8 20,0 20,20 40,20 " />
        </>
      ),
    },
  };

  return (
    <SvgBox data-testid="device" {...deviceSvgProps}>
      {device[variant][deviceSize]}
    </SvgBox>
  );
}
