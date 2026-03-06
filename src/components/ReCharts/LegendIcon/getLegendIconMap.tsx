import { cloneElement, isValidElement, ReactNode } from "react";

import { LegendPayload, LegendType, Symbols } from "recharts";

import { SIZE_ICON_LEGEND } from "./consts";

const halfSize = SIZE_ICON_LEGEND / 2;
const sixthSize = SIZE_ICON_LEGEND / 6;
const thirdSize = SIZE_ICON_LEGEND / 3;

/**
 * @see ReChart's [DefaultLegendContent.js](node_modules/recharts/es6/component/DefaultLegendContent.js)
 */
export function getLegendIcon(
  entry: LegendPayload,
  iconType?: LegendType,
): ReactNode {
  const { color, legendIcon, payload, type } = entry;
  const preferredIcon = iconType ?? type;

  if (preferredIcon === "none") return null;

  const className = "recharts-legend-icon";

  if (preferredIcon === "line") {
    return (
      <path
        {...{
          className,
          d: "M0,"
            .concat(String(halfSize), "h")
            .concat(String(thirdSize), "\n            A")
            .concat(String(sixthSize), ",")
            .concat(String(sixthSize), ",0,1,1,")
            .concat(String(2 * thirdSize), ",")
            .concat(String(halfSize), "\n            H")
            .concat(String(SIZE_ICON_LEGEND), "M")
            .concat(String(2 * thirdSize), ",")
            .concat(String(halfSize), "\n            A")
            .concat(String(sixthSize), ",")
            .concat(String(sixthSize), ",0,1,1,")
            .concat(String(thirdSize), ",")
            .concat(String(halfSize)),
          fill: "none",
          stroke: color,
          strokeWidth: 4,
        }}
      />
    );
  }

  if (preferredIcon === "plainline") {
    return (
      <line
        {...{
          className,
          fill: "none",
          stroke: color,
          strokeDasharray: payload?.strokeDasharray,
          strokeWidth: 4,
          x1: 0,
          x2: SIZE_ICON_LEGEND,
          y1: halfSize,
          y2: halfSize,
        }}
      />
    );
  }

  if (preferredIcon === "rect") {
    return (
      <path
        {...{
          className,
          d: "M0,"
            .concat(String(SIZE_ICON_LEGEND / 8), "h")
            .concat(String(SIZE_ICON_LEGEND), "v")
            .concat(String((SIZE_ICON_LEGEND * 3) / 4), "h")
            .concat(String(-SIZE_ICON_LEGEND), "z"),
          fill: color,
          stroke: "none",
        }}
      />
    );
  }

  if (isValidElement(legendIcon)) {
    return cloneElement(legendIcon, { className });
  }

  return (
    <Symbols
      {...{
        className,
        cx: halfSize,
        cy: halfSize,
        fill: color,
        size: SIZE_ICON_LEGEND,
        sizeType: "diameter",
        type: preferredIcon,
      }}
    />
  );
}
