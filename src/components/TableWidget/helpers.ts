/**
 * Converts a string like `[0.85%, -1.00%, (0.18%)]` into decimals: `[0.0085, -0.01, -0.0018]`
 * - Accepts `null`, `undefined`, empty strings → returns `[]`
 * - Accepts already-parsed number arrays → returns as-is
 * - Ignores empty items and non-numeric tokens
 */
export function parsePctArray(
  input: string | number[] | null | undefined
): number[] {
  if (input == null) return [];

  // Already numeric?
  if (Array.isArray(input)) {
    return input
      .map((v) => (typeof v === "number" && Number.isFinite(v) ? v : NaN))
      .filter((v) => Number.isFinite(v));
  }

  // Expecting string like "[1.23%, -0.45%, (0.18%)]"
  const s = String(input).trim();
  if (!s) return [];

  // Strip leading/trailing brackets, then split by comma
  const rawItems = s.replace(/^\[/, "").replace(/\]$/, "").split(",");

  const toDecimal = (token: string): number | null => {
    if (!token) return null;

    // Trim spaces
    let t = token.trim();

    // Handle parentheses negatives e.g., "(0.18%)"
    const paren = /^\((.*)\)$/.exec(t);
    if (paren) t = `-${paren[1]}`;

    // Remove percent sign and extra spaces
    t = t.replace(/\s*%\s*$/, "").trim();

    const n = Number(t);
    if (!Number.isFinite(n)) return null;

    // Convert percentage → decimal
    return n / 100;
  };

  const decimals = rawItems
    .map(toDecimal)
    .filter((v): v is number => v != null && Number.isFinite(v));

  return decimals;
}
