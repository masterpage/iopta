import { scaleBand, scaleLinear } from "@visx/scale";
import { useTheme } from "@mui/material";

interface Last18mBarsProps {
  ariaLabel?: string;
  backgroundColor?: string;
  /** gap between bars (px) */
  barGap?: number;
  /** bottom inner padding (px) */
  bottomPad?: number; //
  height?: number;
  negativeColor?: string;
  /** opacity for the lowest (most negative) value */
  negMinOpacity?: number;
  /** optional dim for all other bars (default 1) */
  othersOpacity?: number;
  positiveColor?: string;
  /** opacity for the highest positive value */
  posMaxOpacity?: number;
  /** draw baseline at `y=0` */
  showZeroLine?: boolean;
  /** top inner padding (px) */
  topPad?: number;
  values: number[];
  /**
   * Decimal values.
   * @example [0.0085, -0.01, ...]
   * */
  width?: number;
}

export function Last18mBars(props: Last18mBarsProps) {
  const theme = useTheme();
  const {
    palette: { success: colorPos, error: colorNeg },
  } = theme;

  const {
    ariaLabel = "Last 18 months performance",
    backgroundColor = "transparent",
    barGap = 1,
    bottomPad = 0,
    height = 24,
    negativeColor = colorNeg.light,
    negMinOpacity = 1,
    othersOpacity,
    positiveColor = colorPos.light,
    posMaxOpacity = 1,
    showZeroLine = true,
    topPad = 0,
    values,
    width = 120,
  } = props;

  const n = values.length || 0;

  if (n === 0 || width <= 0 || height <= 0) {
    return <div style={{ width, height }} aria-label={ariaLabel} />;
  }

  const minV = Math.min(0, ...values);
  const maxV = Math.max(0, ...values);
  const xScale = scaleBand<number>({
    domain: Array.from({ length: n }, (_, i) => i),
    range: [0, width],
    paddingInner: Math.min(0.9, barGap / Math.max(1, width / n)),
  });
  const yScale = scaleLinear<number>({
    domain: [minV, maxV],
    range: [height - bottomPad, topPad],
  });
  const zeroY = yScale(0);

  /** Finds highest positive and lowest negative */
  let posMax = -Infinity; /** largest v > 0 */
  let negMin = +Infinity; /** smallest v < 0 (most negative) */

  for (const v of values) {
    if (v > 0 && v > posMax) posMax = v;
    if (v < 0 && v < negMin) negMin = v;
  }

  const hasPositive = Number.isFinite(posMax);
  const hasNegative = Number.isFinite(negMin);

  return (
    <svg
      width={width}
      height={height}
      role="img"
      aria-label={ariaLabel}
      style={{ display: "block" }}
    >
      {backgroundColor !== "transparent" && (
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={backgroundColor}
        />
      )}
      {showZeroLine && Number.isFinite(zeroY) && (
        <line
          x1={0}
          x2={width}
          y1={zeroY}
          y2={zeroY}
          stroke="#c9c9c9"
          strokeWidth={0.75}
          vectorEffect="non-scaling-stroke"
        />
      )}
      {values.map((v, i) => {
        const x = xScale(i) ?? 0;
        const barW = Math.max(0.5, xScale.bandwidth());

        const yVal = yScale(v);
        const y0 = zeroY;

        if (!Number.isFinite(yVal) || !Number.isFinite(y0)) return null;

        // Normalize geometry so height is always positive
        const barX = x;
        const barY = Math.min(yVal, y0);
        let barH = Math.abs(yVal - y0);

        /**
         * Guard for very tiny bars: ensure at least 0.5px for visibility
         */
        if (barH < 0.5) barH = 0.5;

        const fill = v < 0 ? negativeColor : positiveColor;
        /**
         * Determine highlighting:
         * - If v > 0 and equals the highest positive, use posMaxOpacity
         * - If v < 0 and equals the lowest negative, use negMinOpacity
         * - Else othersOpacity (if provided) or default 1
         */
        const isPosMax = hasPositive && v > 0 && v === posMax;
        const isNegMin = hasNegative && v < 0 && v === negMin;

        const opacity = isPosMax
          ? posMaxOpacity
          : isNegMin
          ? negMinOpacity
          : othersOpacity ?? 1;

        return (
          <rect
            key={i}
            x={barX}
            y={barY}
            width={barW}
            height={barH}
            fill={fill}
            opacity={opacity}
            rx={0.5}
            ry={0.5}
          />
        );
      })}
    </svg>
  );
}
