import { Box } from "@mui/material";

import { ContentType } from "recharts/types/component/DefaultLegendContent";

import { LegendIcon } from "@/components/ReCharts/LegendIcon";

export const ChartLegend: ContentType = (props) => {
  const { color, payload, iconType, iconSize } = props;

  if (!(payload && payload.length)) {
    return null;
  }

  return (
    <Box
      component="ul"
      sx={{
        color,
        display: "flex",
        fontSize: 12,
        gap: "1em",
        justifyContent: "center",
        lineHeight: "normal",
        margin: "unset",
        padding: "unset",
      }}
    >
      {payload.map((entry) => (
        <Box
          component="li"
          key={entry.value}
          sx={{ alignItems: "center", display: "flex", gap: "0.3125em" }}
        >
          <LegendIcon {...{ entry, iconSize, iconType }} />
          <Box>{entry.value}</Box>
        </Box>
      ))}
    </Box>
  );
};
