import { DEFAULT_DASHTYPE } from "@/app/consts";
import { DashType } from "@/features/dashboard";
import {
  getTypedName,
  getTypedNameIndex,
  getTypedNames,
  isLooseTypedNameExist,
} from "@/utils";

export const dashTypeValues = getTypedNames(DashType);

export function getDashTypeIndex(looseDashType: string): number {
  const dashTypeindex = getTypedNameIndex(DashType, looseDashType);

  return dashTypeindex;
}

export function getDefaultDashType(): DashType {
  return DEFAULT_DASHTYPE;
}

export function getDashName(looseDashType?: string): DashType | null {
  const name = getTypedName(DashType, looseDashType);

  return name;
}

/**
 * Checks if received `dashType` exists (falls into pre-defined `DashType`).
 * @param looseDashType if `undefined`, represents default dashboard shown in _Home_ route.
 * @returns `true` if `looseDashType` is expected. `false` otherwise.
 */
export function isLooseDashTypeExist(looseDashType?: string): boolean {
  const isExist = isLooseTypedNameExist(DashType, looseDashType);

  return isExist;
}
