import { useEffect, useMemo, useRef, useState } from 'react'

import { Badge, Box, Divider, Grid, Typography, useTheme } from '@mui/material'
import { alpha } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import type { MarketMetric } from 'src/data'

type FlashDirection = 'up' | 'down' | null

export interface MarketOverviewTileProps
  extends Pick<
    MarketMetric,
    | 'symbol'
    | 'marketState'
    | 'value'
    | 'change'
    | 'changePercent'
    | 'high'
    | 'low'
    | 'formatValue'
  > {
  // Enables the sparkles icon + warning border for VIX tiles.
  isVix?: boolean
}

export function MarketOverviewTile(props: MarketOverviewTileProps) {
  const {
    symbol,
    isVix = false,
    marketState,
    value,
    change,
    changePercent,
    high,
    low,
    formatValue,
  } = props

  const { palette, typography } = useTheme()
  const [direction, setDirection] = useState<FlashDirection>(null)
  const prevValueRef = useRef<number | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (prevValueRef.current == null) {
      prevValueRef.current = value
      return
    }

    if (value === prevValueRef.current) return

    const nextDirection: FlashDirection =
      value > prevValueRef.current ? 'up' : 'down'
    setDirection(nextDirection)
    prevValueRef.current = value

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setDirection(null)
    }, 600)
  }, [value])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const flashColorByDirection = {
    up: palette.success.main,
    down: palette.error.main,
    none: palette.text.primary,
  }
  const flashColor =
    flashColorByDirection[direction ?? 'none'] ?? palette.text.primary

  const displayValue =
    formatValue?.(value) ??
    value.toLocaleString('en-US', { maximumFractionDigits: 2 })

  const changeColorByDirection = {
    up: palette.success.main,
    down: palette.error.main,
    flat: palette.text.secondary,
  }
  let changeDirection: 'up' | 'down' | 'flat' = 'flat'
  if (change > 0) {
    changeDirection = 'up'
  } else if (change < 0) {
    changeDirection = 'down'
  }
  const changeColor = changeColorByDirection[changeDirection]

  const changeDisplay = useMemo(() => {
    let sign = ''
    if (change > 0) {
      sign = '+'
    } else if (change < 0) {
      sign = '-'
    }
    return `${sign}${Math.abs(change).toLocaleString('en-US', {
      maximumFractionDigits: 2,
    })}`
  }, [change])

  const percentDisplay = useMemo(() => {
    let sign = ''
    if (changePercent > 0) {
      sign = '+'
    } else if (changePercent < 0) {
      sign = '-'
    }
    return `${sign}${Math.abs(changePercent).toFixed(2)}%`
  }, [changePercent])

  const stateColorByState = {
    STRESSED: palette.error.main,
    ELEVATED: palette.warning.main,
    NORMAL: palette.success.main,
  }
  const stateColor = stateColorByState[marketState]

  const isFlashing = direction != null
  const cardBorderColor = isVix
    ? alpha(palette.warning.main, 0.4)
    : palette.divider
  const cardBackgroundColor = isFlashing
    ? alpha(flashColor, 0.08)
    : palette.action.hover
  const cardBoxShadow = isFlashing
    ? `0 0 0 2px ${alpha(flashColor, 0.25)}`
    : 'none'
  const priceColor = isFlashing ? flashColor : palette.text.primary
  const priceBackgroundColor = isFlashing
    ? alpha(flashColor, 0.2)
    : alpha(palette.text.primary, 0.0)
  const priceBorderRadius = isFlashing ? 1 : undefined

  const isPositiveChange = changePercent >= 0
  const gradientColor = isPositiveChange
    ? palette.success.main
    : palette.error.main
  const backgroundGradient = `linear-gradient(135deg, ${alpha(
    gradientColor,
    0.25
  )}, transparent)`

  const vixIcon = isVix ? (
    <AutoAwesomeIcon sx={{ fontSize: 16, color: palette.warning.main }} />
  ) : null

  let trendIcon: React.ReactNode = null
  if (changePercent > 0) {
    trendIcon = (
      <TrendingUpIcon sx={{ fontSize: 16, color: palette.success.main }} />
    )
  } else if (changePercent < 0) {
    trendIcon = (
      <TrendingDownIcon sx={{ fontSize: 16, color: palette.error.main }} />
    )
  }

  const cardSx = {
    overflow: 'hidden',
    border: `1px solid ${cardBorderColor}`,
    borderRadius: 1,
    px: 2,
    py: 1.5,
    backgroundColor: cardBackgroundColor,
    boxShadow: cardBoxShadow,
    transition:
      'border-color 150ms ease, box-shadow 150ms ease, background-color 150ms ease',
  }

  const backgroundSx = {
    position: 'absolute',
    inset: 0,
    opacity: 0.08,
    background: backgroundGradient,
  }

  const headerSx = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 1,
  }

  const symbolSx = {
    fontFamily: typography.fontFamilyMono,
    fontWeight: 700,
    fontSize: '1rem',
    letterSpacing: '0.08em',
    color: changeDirection === 'flat' ? palette.text.primary : changeColor,
  }

  const stateBadgeSx = {
    color: stateColor,
    backgroundColor: alpha(stateColor, 0.12),
    border: `5px solid ${alpha(stateColor, 0.3)}`,
    borderRadius: '50%',
    height: 'auto',
  }

  const priceSx = {
    fontFamily: typography.fontFamilyMono,
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.2,
    padding: 0.5,
    color: priceColor,
    transition: 'color 150ms ease',
    backgroundColor: priceBackgroundColor,
    borderRadius: priceBorderRadius,
  }

  const changeTextSx = {
    fontFamily: typography.fontFamilyMono,
    fontSize: '0.85rem',
    color: changeColor,
  }

  const dividerSx = {
    my: 1.5,
    borderColor: alpha(palette.divider, 0.1),
  }

  const statLabelSx = {
    fontSize: '0.7rem',
    color: palette.text.secondary,
  }

  const statValueSx = {
    ml: 0.5,
    fontFamily: typography.fontFamilyMono,
    color: palette.text.primary,
  }

  return (
    <Box sx={cardSx}>
      <Box sx={backgroundSx} />

      <Box sx={{ position: 'relative' }}>
        <Box sx={headerSx}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {vixIcon}
            <Typography sx={symbolSx}>{symbol}</Typography>
          </Box>
          <Badge sx={stateBadgeSx} />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 0.5 }}>
          <Typography sx={priceSx}>{displayValue}</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {trendIcon}
          <Typography sx={changeTextSx}>{changeDisplay}</Typography>
          <Typography sx={changeTextSx}>{percentDisplay}</Typography>
        </Box>

        <Divider sx={dividerSx} />

        <Grid container spacing={1}>
          <Grid size={{ xs: 6 }}>
            <Typography sx={statLabelSx}>
              H:
              <Box component="span" sx={statValueSx}>
                {high.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </Box>
            </Typography>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Typography sx={statLabelSx}>
              L:
              <Box component="span" sx={statValueSx}>
                {low.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
