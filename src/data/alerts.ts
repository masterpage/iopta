type AlertSeverity = "CRITICAL" | "INFO" | "WARNING"
type AlertType = "CORRELATION" | "EVENT" | "PRICE_GAP" | "SPREAD" | "VOLATILITY"

interface MarketAlert {
  id: string
  severity: AlertSeverity
  type: AlertType
  symbol?: string
  message: string
  timestamp: string
  acknowledged?: boolean
}

export const typeLabels: Record<AlertType, string> = {
  CORRELATION: "COR",
  EVENT: "EVT",
  PRICE_GAP: "GAP",
  SPREAD: "SPD",
  VOLATILITY: "VOL",
}

export const mockAlerts: MarketAlert[] = [
  {
    id: "1",
    severity: "CRITICAL",
    type: "PRICE_GAP",
    symbol: "AAPL",
    message: "Price gap of 3.4% detected after open.",
    timestamp: new Date(Date.now() - 1000 * 60 * 4).toISOString(),
  },
  {
    id: "2",
    severity: "WARNING",
    type: "VOLATILITY",
    symbol: "TSLA",
    message: "Realized volatility exceeded 95th percentile.",
    timestamp: new Date(Date.now() - 1000 * 60 * 19).toISOString(),
  },
  {
    id: "3",
    severity: "INFO",
    type: "EVENT",
    symbol: "NVDA",
    message: "Earnings call scheduled in 2 hours.",
    timestamp: new Date(Date.now() - 1000 * 60 * 42).toISOString(),
  },
  {
    id: "4",
    severity: "WARNING",
    type: "SPREAD",
    symbol: "EURUSD",
    message: "Bid/ask spread widened above average.",
    timestamp: new Date(Date.now() - 1000 * 60 * 85).toISOString(),
  },
  {
    id: "5",
    severity: "INFO",
    type: "CORRELATION",
    message: "Correlation spike detected across sector basket.",
    timestamp: new Date(Date.now() - 1000 * 60 * 140).toISOString(),
  },
]
