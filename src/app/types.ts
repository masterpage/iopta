export interface DynamicPageProps<P = string[], S extends object = object> {
  params?: Promise<DynamicPageSlug<P>>;
  searchParams?: Promise<S>;
}

export interface DynamicPageSlug<S = string[]> {
  slug: S;
}
