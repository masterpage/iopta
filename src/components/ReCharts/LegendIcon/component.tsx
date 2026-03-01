import { Box } from "@mui/material";
import {
  DefaultLegendContentProps,
  Surface,
  SurfaceProps,
  LegendPayload,
} from "recharts";

import { getLegendIcon } from "./getLegendIconMap";
import { SIZE_ICON_LEGEND } from "./consts";

interface LegendIconProps extends Pick<
  DefaultLegendContentProps,
  "iconType" | "iconSize"
> {
  entry: LegendPayload;
}

const viewBox: SurfaceProps["viewBox"] = {
  x: 0,
  y: 0,
  width: SIZE_ICON_LEGEND,
  height: SIZE_ICON_LEGEND,
};

export function LegendIcon(props: LegendIconProps) {
  const { entry, iconSize, iconType } = props;

  if (!iconSize) return null;

  const legendIcon = getLegendIcon(entry, iconType);

  return (
    <Box component={Surface} sx={{ height: iconSize }} viewBox={viewBox}>
      {legendIcon}
    </Box>
  );
}
