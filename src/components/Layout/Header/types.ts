export * from "./IoptaLogo/types";

export interface Page {
  label: string;
  uri: PageUri;
}

export type PageUri = "/" | "/market" | "/orders";
