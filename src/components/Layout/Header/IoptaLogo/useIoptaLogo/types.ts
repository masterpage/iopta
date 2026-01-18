export type LogoBgGeometry = Record<
  LogoGeometryBgKey,
  Record<LogoGeometrySizeKey, number>
>;

export type LogoElementGeometry = Record<
  LogoGeometryElementKey,
  Partial<Record<LogoGeometryPositionKey, number>> &
    Record<LogoGeometrySizeKey, number>
>;

export type LogoGeometry = LogoBgGeometry & LogoElementGeometry;

export type LogoGeometryBgKey = "bg";
export type LogoGeometryElementKey = "device" | "wording";
export type LogoGeometryPositionKey = "bottom" | "left" | "right" | "top";
export type LogoGeometrySizeKey = "height" | "width";

export type UseIoptaLogoParams = {
  standardGeometry?: LogoGeometry;
} & UseIoptaLogoResize;

export type UseIoptaLogoResize =
  | UseIoptaLogoResizeHeight
  | UseIoptaLogoResizeScale
  | UseIoptaLogoResizeWidth;

export interface UseIoptaLogoResizeHeight {
  height: number;
}

export interface UseIoptaLogoResizeScale {
  scale: number;
}

export interface UseIoptaLogoResizeWidth {
  width: number;
}

export interface UseIoptaLogoReturn {
  /**
   * Calculates exclusion sizes based on logo device width.
   */
  exclusion: [top: number, right: number, bottom: number, left: number];
  geometry: LogoGeometry;
}
