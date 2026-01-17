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

export type LogoGeometryBgKey = 'bg';
export type LogoGeometryElementKey = 'device' | 'wording';
export type LogoGeometryPositionKey = 'bottom' | 'left' | 'right' | 'top';
export type LogoGeometrySizeKey = 'height' | 'width';

export type UseMasterpageLogoParams = {
  standardGeometry?: LogoGeometry;
} & UseMasterpageLogoResize;

export type UseMasterpageLogoResize =
  | UseMasterpageLogoResizeHeight
  | UseMasterpageLogoResizeScale
  | UseMasterpageLogoResizeWidth;

export interface UseMasterpageLogoResizeHeight {
  height: number;
}

export interface UseMasterpageLogoResizeScale {
  scale: number;
}

export interface UseMasterpageLogoResizeWidth {
  width: number;
}

export interface UseMasterpageLogoReturn {
  /**
   * Calculates exclusion sizes based on logo device width.
   */
  exclusion: [top: number, right: number, bottom: number, left: number];
  geometry: LogoGeometry;
}
