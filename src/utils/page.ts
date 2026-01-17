import { decode } from "html-entities";

import { MASTERPAGE } from "@/app/consts";

export function getPageTitle(titles?: string[]): string {
  if (!titles || !titles.length) {
    return MASTERPAGE;
  }

  const dividers: string[] = ["|", "&mdash;", "&ndash;", "-", "&middot;"];
  const defaultDivider = dividers[dividers.length - 1];
  const titlesWithDividers: string[] = [];

  [MASTERPAGE, ...titles].forEach((title, i, arr) => {
    const divider = dividers.length - 1 < i ? defaultDivider : dividers[i];
    const isLastTitle = arr.length - 1 === i;

    return titlesWithDividers.push(...[title, ...[isLastTitle ? "" : divider]]);
  });

  const pageTitle = decode(titlesWithDividers.reverse().join(" ").trim());

  return pageTitle;
}
