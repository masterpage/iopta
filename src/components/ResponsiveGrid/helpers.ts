import { type LayoutItem } from "react-grid-layout";

import { defaultRglProps } from "./consts";
import { ResponsiveGridProps } from "./types";

/**
 * Compute RGL `h` so the item shows `rowsShown` content rows,
 * with gaps only between rows (no bottom gap).
 */
export function getH(
  rowsNum: number,
  rglProps?: Required<Pick<ResponsiveGridProps, "rowHeight" | "margin">>,
): Pick<LayoutItem, "h"> {
  const { margin, rowHeight } = { ...defaultRglProps, ...(rglProps ?? {}) };

  let marginY: number = 0;

  if (Array.isArray(margin)) {
    const [, mY] = margin;

    marginY = mY;
  } else {
    // TODO: Handle `margin` as an object
  }

  const widgetHeightPx = rowsToWidgetHeightPx(rowsNum, rowHeight);

  const h = pixelsToRows(widgetHeightPx, rowHeight, marginY);

  const layoutItemH: Pick<LayoutItem, "h"> = {
    h,
  };

  return layoutItemH;
}

export function rowsToWidgetHeightPx(rows: number, rowHeight: number): number {
  if (rows <= 0) return 0;

  const widgetHeightPx = rows * rowHeight;

  return widgetHeightPx;
}

export function pixelsToRows(
  widgetHeightPx: number,
  rowHeight: number,
  marginY: number,
): number {
  if (!Number.isFinite(widgetHeightPx) || widgetHeightPx <= 0) {
    return 1;
  }

  if (!Number.isFinite(rowHeight) || rowHeight <= 0) {
    throw new Error("rowHeight must be > 0");
  }

  if (!Number.isFinite(marginY) || marginY < 0) {
    throw new Error("marginY must be >= 0");
  }

  const pitch = rowHeight + marginY;
  const h = (widgetHeightPx + marginY) / pitch;

  return h;
}
