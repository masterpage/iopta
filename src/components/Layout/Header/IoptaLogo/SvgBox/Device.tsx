import { ReactElement } from "react";

import { IoptaLogoProps } from "../types";
import { SvgBox } from "./component";
import { SvgBoxProps } from "./types";

type DeviceProps = Omit<SvgBoxProps, "color"> &
  Required<Pick<IoptaLogoProps, "variant">>;

export function Device(
  props: Readonly<DeviceProps>
): ReactElement<SvgBoxProps> {
  const { variant, ...localSvgProps } = props;
  const deviceSvgProps: SvgBoxProps = {
    ...localSvgProps,
    viewBox: "0 0 40 40",
  };
  const device: Record<
    NonNullable<IoptaLogoProps["variant"]>,
    ReactElement<SvgBoxProps>
  > = {
    mono: (
      <path d="M32,24h8v16H0V0h16v8H8v24h24V24z M32,12h-4V8l-8-8v20h20L32,12z" />
    ),
  };

  return (
    <SvgBox data-testid="device" {...deviceSvgProps}>
      {device[variant]}
    </SvgBox>
  );
}
