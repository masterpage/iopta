import { Placeholder, Widget, WidgetProps } from '@/components'

export function MarketOverview(props: Omit<WidgetProps, 'title'>) {
  return (
    <Widget {...props} title="Market Overview">
      <Placeholder sx={{ backgroundColor: 'unset', flex: 1 }}>
        Market Overview
      </Placeholder>
    </Widget>
  )
}
