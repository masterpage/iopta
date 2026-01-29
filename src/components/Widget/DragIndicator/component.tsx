import { getSx } from "@/utils";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import { Icon, IconProps } from "@mui/material";

interface DragIndicatorProps extends IconProps {}

export function DragHandle(props: DragIndicatorProps) {
  const { sx, ...restProps } = props;

  return (
    <Icon
      className="widget-drag-handle"
      component={DragIndicatorIcon}
      {...restProps}
      sx={(theme) => {
        const {
          palette: { primary },
        } = theme;

        return {
          color: primary.main,
          cursor: "grab",
          height: "1.25rem",
          width: "1.25rem",
          "&:active": { cursor: "grabbing" },
          ...getSx(sx, theme),
        };
      }}
    />
  );
}
