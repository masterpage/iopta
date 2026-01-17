export enum Env {
  development = "development",
  preview = "preview",
  production = "production",
  test = "test",
}

export type EnvKey = keyof typeof Env;

export type Writeable<T> = {
  -readonly [P in keyof T]: T[P] extends object ? Writeable<T[P]> : T[P];
};

/**
 * @see [Support `ReadonlyArray.includes` as a type guard](https://github.com/microsoft/TypeScript/issues/31018#issuecomment-808135421).
 */
export const isInArray = <T, A extends T>(
  item: T,
  array: ReadonlyArray<A>
): item is A => array.includes(item as A);

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K];
};
