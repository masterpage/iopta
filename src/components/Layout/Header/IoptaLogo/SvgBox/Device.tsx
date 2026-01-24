import { ReactElement } from "react";

import { SvgBox, type IoptaLogoProps, type SvgBoxProps } from "@/components";

type DeviceProps = Omit<SvgBoxProps, "color"> &
  Required<Pick<IoptaLogoProps, "variant">>;

export function Device(
  props: Readonly<DeviceProps>
): ReactElement<SvgBoxProps> {
  const { variant, ...localSvgProps } = props;
  const deviceSvgProps: SvgBoxProps = {
    ...localSvgProps,
    viewBox: "0 0 96 96",
  };
  const device: Record<
    NonNullable<IoptaLogoProps["variant"]>,
    ReactElement<SvgBoxProps>
  > = {
    mono: (
      <path d="M48,6c9.93,0,18,8.07,18,18s-8.07,18-18,18-18-8.07-18-18S38.07,6,48,6M48,0c-13.25,0-24,10.75-24,24s10.75,24,24,24,24-10.75,24-24S61.25,0,48,0h0ZM77.98,24.75c-.05,2.07-.31,4.08-.76,6.03,7.39,2.24,12.78,9.11,12.78,17.22,0,9.93-8.07,18-18,18h-6v6c0,9.93-8.07,18-18,18s-18-8.07-18-18v-6h-6c-9.93,0-18-8.07-18-18,0-8.11,5.39-14.98,12.78-17.22-.45-1.94-.71-3.96-.76-6.03C7.66,27.41,0,36.81,0,48c0,13.25,10.75,24,24,24,0,13.25,10.75,24,24,24s24-10.75,24-24c13.25,0,24-10.75,24-24,0-11.19-7.66-20.59-18.02-23.25Z" />
    ),
  };

  return (
    <SvgBox data-testid="device" {...deviceSvgProps}>
      {device[variant]}
    </SvgBox>
  );
}
