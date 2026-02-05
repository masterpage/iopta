import { useEffect, useState } from 'react'

import {
  mockedMarketOverviewMetrics,
  type MarketMetric,
  type MarketState,
} from 'src/data'

function getMarketState(changePercent: number): MarketState {
  const magnitude = Math.abs(changePercent)
  if (magnitude >= 1.25) return 'STRESSED'
  if (magnitude >= 0.6) return 'ELEVATED'
  return 'NORMAL'
}

function useMarketOverviewMetrics(updateInterval = 1200) {
  const [metrics, setMetrics] = useState<MarketMetric[]>(
    mockedMarketOverviewMetrics,
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => {
          if (Math.random() > 0.35) return metric
          const volatility = metric.id === 'vix' ? 0.02 : 0.004
          const change = (Math.random() - 0.5) * 2 * metric.value * volatility
          const nextValue = Math.max(0.01, metric.value + change)
          const nextChange = nextValue - metric.previousClose
          const nextChangePercent =
            metric.previousClose === 0
              ? 0
              : (nextChange / metric.previousClose) * 100
          return {
            ...metric,
            value: nextValue,
            change: nextChange,
            changePercent: nextChangePercent,
            high: Math.max(metric.high, nextValue),
            low: Math.min(metric.low, nextValue),
            marketState: getMarketState(nextChangePercent),
          }
        }),
      )
    }, updateInterval)

    return () => {
      clearInterval(interval)
    }
  }, [updateInterval])

  return metrics
}

export { useMarketOverviewMetrics }
