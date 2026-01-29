/**
 * Prepares an array of values extracted from provided dictionary.
 */
export function getTypedNames<V>(dictionary: Record<string, V>): V[] {
  const names = Object.values(dictionary) as V[];

  return names;
}

/**
 * Tries to find a given loose name in the provided dictionary.
 * @returns typed name, if found.
 * @returns `null`, otherwise.
 */
export function getTypedName<V extends string>(
  dictionary: Record<string, V>,
  looseValue?: string
): V | null {
  if (!(looseValue && looseValue.length)) return null;

  const typed = getTypedNames(dictionary);

  const typedName = typed.find(
    (tn) => tn.toLowerCase() === looseValue.toLowerCase()
  );

  if (!typedName) return null;

  return typedName;
}

/**
 * @returns `index` of the loose value in the given dictionary, if found.
 * @returns `-1`, otherwise.
 */
export function getTypedNameIndex<V extends string>(
  dictionary: Record<string, V>,
  looseTypedName: string
): number {
  if (!looseTypedName) return -1;

  const dashTypeValues = getTypedNames(dictionary);
  const dashTypeIndex: number = dashTypeValues.findIndex(
    (v) => v.toLowerCase() === looseTypedName.toLowerCase()
  );

  return dashTypeIndex;
}

/**
 * Checks if given `looseName` exists (findable in the dictionary).
 * @returns `true` if `looseName` exists.
 * @returns `false`, otherwise.
 */
export function isLooseTypedNameExist<V extends string>(
  dictionary: Record<string, V>,
  looseName?: string
): boolean {
  /**
   * Undefined `dashType` means _Home_, and should be allowed
   */
  if (!(looseName && Boolean(looseName.length))) return true;

  const isExist = Boolean(getTypedName(dictionary, looseName));

  return isExist;
}
