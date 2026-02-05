export type MarketState = 'NORMAL' | 'ELEVATED' | 'STRESSED'

export interface MarketMetric {
  id: string
  symbol: string
  label: string
  value: number
  previousClose: number
  change: number
  changePercent: number
  high: number
  low: number
  marketState: MarketState
  formatValue?: (value: number) => string
}

export const mockedMarketOverviewMetrics: MarketMetric[] = [
  {
    id: 'spx',
    symbol: 'SPX',
    label: 'S&P 500',
    value: 4932.12,
    previousClose: 4918.24,
    change: 4932.12 - 4918.24,
    changePercent: ((4932.12 - 4918.24) / 4918.24) * 100,
    high: 4952.41,
    low: 4898.12,
    marketState: 'NORMAL',
  },
  {
    id: 'ndx',
    symbol: 'NDX',
    label: 'Nasdaq 100',
    value: 17488.55,
    previousClose: 17422.2,
    change: 17488.55 - 17422.2,
    changePercent: ((17488.55 - 17422.2) / 17422.2) * 100,
    high: 17550.38,
    low: 17360.44,
    marketState: 'NORMAL',
  },
  {
    id: 'dji',
    symbol: 'DJI',
    label: 'Dow 30',
    value: 38642.21,
    previousClose: 38590.32,
    change: 38642.21 - 38590.32,
    changePercent: ((38642.21 - 38590.32) / 38590.32) * 100,
    high: 38788.23,
    low: 38492.15,
    marketState: 'NORMAL',
  },
  {
    id: 'vix',
    symbol: 'VIX',
    label: 'VIX',
    value: 16.92,
    previousClose: 17.05,
    change: 16.92 - 17.05,
    changePercent: ((16.92 - 17.05) / 17.05) * 100,
    high: 17.42,
    low: 16.4,
    marketState: 'ELEVATED',
    formatValue: (value) => value.toFixed(2),
  },
]
