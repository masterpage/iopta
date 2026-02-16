import { MarketType } from '@/features'
import type { ReactNode } from 'react'
import type { ResponsiveGridLayoutProps } from 'react-grid-layout'
import { Alerts } from './monitor/Alerts'
import { AllInstruments } from './monitor/AllInstruments/component'
import { CorrelationMatrix } from './monitor/CorrelationMatrix/component'
import { LiquidityMonitor } from './monitor/LiquidityMonitor/component'
import { MarketOverview } from './monitor/MarketOverview/component'
import { UpcomingEvents } from './monitor/UpcomingEvents/component'
import { VolatilityMonitor } from './monitor/VolatilityMonitor/component'
import { getH } from '@/components'

interface GetMarketDashboardReturn {
  cols: ResponsiveGridLayoutProps['cols']
  layouts: ResponsiveGridLayoutProps['layouts']
  widgets: ReactNode
}

export function getMarketDashboard(
  marketType: MarketType,
): GetMarketDashboardReturn {
  const cols: ResponsiveGridLayoutProps['cols'] = {
    xl: 18,
    lg: 12,
    md: 8,
    sm: 4,
    xs: 1,
  }
  let layouts: ResponsiveGridLayoutProps['layouts']
  let widgets: ReactNode

  if (marketType === MarketType.MONITOR) {
    layouts = {
      xl: [
        { i: 'MarketOverview', x: 0, y: 0, w: 18, ...getH(4), static: true }, // TODO: Need to make this dynamic
        { i: 'AllInstruments', x: 0, y: 2, w: 14, ...getH(6.5) },
        { i: 'Alerts', x: 14, y: 2, w: 4, ...getH(10) },
        { i: 'UpcomingEvents', x: 14, y: 4, w: 4, ...getH(3) },
        { i: 'VolatilityMonitor', x: 0, y: 6, w: 7, ...getH(3) },
        { i: 'LiquidityMonitor', x: 7, y: 6, w: 7, ...getH(3) },
        { i: 'CorrelationMatrix', x: 0, y: 6, w: 7, ...getH(3) },
      ],
      lg: [
        { i: 'MarketOverview', x: 0, y: 0, w: 12, ...getH(4), static: true }, // TODO: Need to make this dynamic
        { i: 'AllInstruments', x: 0, y: 2, w: 12, ...getH(6.5) },
        { i: 'Alerts', x: 0, y: 2, w: 6, ...getH(10) },
        { i: 'UpcomingEvents', x: 6, y: 2, w: 6, ...getH(3) },
        { i: 'VolatilityMonitor', x: 0, y: 6, w: 6, ...getH(3) },
        { i: 'LiquidityMonitor', x: 6, y: 6, w: 6, ...getH(3) },
        { i: 'CorrelationMatrix', x: 0, y: 6, w: 6, ...getH(3) },
      ],
      md: [
        { i: 'MarketOverview', x: 0, y: 0, w: 8, ...getH(4), static: true }, // TODO: Need to make this dynamic
        { i: 'AllInstruments', x: 0, y: 1, w: 8, ...getH(6.5) },
        { i: 'Alerts', x: 0, y: 2, w: 4, ...getH(10) },
        { i: 'UpcomingEvents', x: 4, y: 2, w: 4, ...getH(3) },
        { i: 'VolatilityMonitor', x: 0, y: 4, w: 8, ...getH(3) },
        { i: 'LiquidityMonitor', x: 0, y: 5, w: 8, ...getH(3) },
        { i: 'CorrelationMatrix', x: 0, y: 6, w: 8, ...getH(3) },
      ],
      sm: [
        { i: 'MarketOverview', x: 0, y: 0, w: 4, ...getH(8.5), static: true }, // TODO: Need to make this dynamic
        { i: 'AllInstruments', x: 0, y: 1, w: 4, ...getH(6.5) },
        { i: 'Alerts', x: 0, y: 2, w: 4, ...getH(10) },
        { i: 'UpcomingEvents', x: 0, y: 3, w: 4, ...getH(3) },
        { i: 'VolatilityMonitor', x: 0, y: 4, w: 4, ...getH(3) },
        { i: 'LiquidityMonitor', x: 0, y: 5, w: 4, ...getH(3) },
        { i: 'CorrelationMatrix', x: 0, y: 6, w: 4, ...getH(3) },
      ],
      xs: [
        { i: 'MarketOverview', x: 0, y: 0, w: 1, ...getH(17.5), static: true }, // TODO: Need to make this dynamic
        { i: 'AllInstruments', x: 0, y: 1, w: 1, ...getH(6.5) },
        { i: 'Alerts', x: 0, y: 2, w: 1, ...getH(10) },
        { i: 'UpcomingEvents', x: 0, y: 3, w: 1, ...getH(3) },
        { i: 'VolatilityMonitor', x: 0, y: 4, w: 1, ...getH(3) },
        { i: 'LiquidityMonitor', x: 0, y: 5, w: 1, ...getH(3) },
        { i: 'CorrelationMatrix', x: 0, y: 6, w: 1, ...getH(3) },
      ],
    }
    widgets = [
      <MarketOverview key="MarketOverview" />,
      <AllInstruments key="AllInstruments" />,
      <Alerts key="Alerts" />,
      <UpcomingEvents key="UpcomingEvents" />,
      <VolatilityMonitor key="VolatilityMonitor" />,
      <LiquidityMonitor key="LiquidityMonitor" />,
      <CorrelationMatrix key="CorrelationMatrix" />,
    ]
  }
  return {
    cols,
    layouts,
    widgets,
  }
}
