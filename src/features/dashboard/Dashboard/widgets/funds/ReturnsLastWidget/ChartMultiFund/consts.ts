export const chartColors: string[] = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
];

type GetFundColors = (fundNames: string[]) => Record<string, string>;

export const getFundColors: GetFundColors = (fundNames) => {
  const colors = [...fundNames]
    .sort((a, b) => a.localeCompare(b))
    .reduce<ReturnType<GetFundColors>>((acc, curr, i) => {
      acc[curr] = chartColors[i % chartColors.length];

      return acc;
    }, {});

  return colors;
};
