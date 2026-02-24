/**
 * Formats ISO date into `Mmm’YY`.
 */
export function monthTick(iso: string): string {
  const d = new Date(iso);
  const m = d.toLocaleString("en-US", { month: "short" });
  const yy = String(d.getUTCFullYear()).slice(2);

  return `${m}’${yy}`;
}
