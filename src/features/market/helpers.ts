import { DEFAULT_MARKETTYPE } from "@/consts";
import { MarketType } from "@/features";
import {
  getTypedName,
  getTypedNameIndex,
  getTypedNames,
  isLooseTypedNameExist,
} from "@/utils";

export const marketTypeValues = getTypedNames(MarketType);

export function getMarketTypeIndex(looseMarketType: string): number {
  const marketTypeIndex = getTypedNameIndex(MarketType, looseMarketType);

  return marketTypeIndex;
}

export function getDefaultMarketType(): MarketType {
  return DEFAULT_MARKETTYPE;
}

export function getMarketName(looseMarketType?: string): MarketType | null {
  const name = getTypedName(MarketType, looseMarketType);

  return name;
}

/**
 * Checks if received `marketType` exists (falls into pre-defined `MarketType`).
 * @param looseMarketType if `undefined`, represents default dashboard shown in _Market_ page.
 * @returns `true` if `looseMarketType` is expected. `false` otherwise.
 */
export function isLooseMarketTypeExist(looseMarketType?: string): boolean {
  const isExist = isLooseTypedNameExist(MarketType, looseMarketType);

  return isExist;
}
