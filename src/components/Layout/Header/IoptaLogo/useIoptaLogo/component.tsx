import {
  LogoGeometry,
  UseIoptaLogoParams,
  UseIoptaLogoResize,
  UseIoptaLogoResizeHeight,
  UseIoptaLogoResizeWidth,
  UseIoptaLogoReturn,
} from "./types";

export const defaultGeometry: LogoGeometry = {
  bg: { height: 25, width: 150 },
  device: { height: 25, right: 0, top: 0, width: 25 },
  wording: { height: 10, left: 0, top: 15, width: 110 },
};

export function useIoptaLogo(
  params: UseIoptaLogoParams = {
    scale: 1,
  }
): UseIoptaLogoReturn {
  const { standardGeometry = defaultGeometry, ...resizeParams } = params;

  function scaleGeometry(
    resize: UseIoptaLogoResize = { scale: 1 }
  ): LogoGeometry {
    function goThruObject<TObj extends object>(o: TObj, coeff: number): TObj {
      const updatedObj = Object.entries(o).reduce((acc, curr) => {
        const [key, value] = curr;

        if (typeof value === "object") {
          Object.assign(acc, { [key]: goThruObject(value, coeff) });
        }

        if (typeof value === "number") {
          Object.assign(acc, { [key]: value * coeff });
        }

        return acc;
      }, {} as TObj);

      return updatedObj;
    }

    if ("scale" in resize) {
      if (resize.scale === 1) {
        return standardGeometry;
      }

      const logoSize = goThruObject(standardGeometry, resize.scale);

      return logoSize;
    }

    const { bg } = standardGeometry;
    const scaleKey:
      | keyof UseIoptaLogoResizeHeight
      | keyof UseIoptaLogoResizeWidth = "height" in resize ? "height" : "width";
    const resizeProp = "height" in resize ? resize.height : resize.width;
    const scale = resizeProp / bg[scaleKey];
    const logoSize = goThruObject(standardGeometry, scale);

    return logoSize;
  }

  /**
   * Calculates exclusion sizes based on logo device width.
   * @returns `[top: number, right: number, bottom: number, left: number]`
   */
  function getExclusion(
    geometry: LogoGeometry
  ): [top: number, right: number, bottom: number, left: number] {
    const exclusionSize = geometry.device.width;

    return [exclusionSize, exclusionSize, exclusionSize, exclusionSize];
  }

  const geometry = scaleGeometry(resizeParams);
  const exclusion = getExclusion(geometry);

  return { exclusion, geometry };
}
