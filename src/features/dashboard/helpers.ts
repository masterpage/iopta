import { DEFAULT_DASHTYPE } from "@/app/consts";
import { DashType } from "@/features/dashboard";

export function getDashTypeValues(): DashType[] {
  const dashNames = Object.values(DashType);

  return dashNames;
}

export function getDashTypeIndex(looseDashType: string): number {
  if (!looseDashType) return -1;

  const dashTypeValues = getDashTypeValues();
  const dashTypeIndex: number = dashTypeValues.findIndex(
    (v) => v.toLowerCase() === looseDashType.toLowerCase()
  );

  return dashTypeIndex;
}

export function getDefaultDashType(): DashType {
  return DEFAULT_DASHTYPE;
}

export function getDashName(looseDashType: string): DashType | null {
  if (!(looseDashType && looseDashType.length)) return null;

  const dashTypes = getDashTypeValues();
  const dashName = dashTypes.find(
    (dt) => dt.toLowerCase() === looseDashType.toLowerCase()
  );

  if (!dashName) return null;

  return dashName;
}

/**
 * Checks if received `dashType` exists (falls into pre-defined `DashType`).
 *
 * @param looseDashType if `undefined`, represents default dashboard shown in _Home_ route.
 * @returns `true` if `looseDashType` is expected. `false` otherwise.
 */
export function isLooseDashTypeExist(looseDashType?: string): boolean {
  /**
   * Undefined `dashType` means _Home_, and should be allowed
   */
  if (!(looseDashType && Boolean(looseDashType.length))) return true;

  const isExist = Boolean(getDashName(looseDashType));

  return isExist;
}
