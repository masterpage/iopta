import { Grid } from '@mui/material'

import { Widget, WidgetProps } from '@/components'

import { MarketOverviewTile } from './MarketOverviewTile'
import { useMarketOverviewMetrics } from 'src/hooks'

export function MarketOverview(props: Omit<WidgetProps, 'title'>) {
  const metrics = useMarketOverviewMetrics()

  return (
    <Widget {...props} title="Market Overview">
      <Grid container spacing={2}>
        {metrics.map((metric) => (
          <Grid key={metric.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <MarketOverviewTile {...metric} isVix={metric.id === 'vix'} />
          </Grid>
        ))}
      </Grid>
    </Widget>
  )
}
