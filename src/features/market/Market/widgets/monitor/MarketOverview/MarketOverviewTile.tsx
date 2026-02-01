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

  const theme = useTheme()
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

  const flashColor =
    direction === 'up'
      ? theme.palette.success.main
      : direction === 'down'
      ? theme.palette.error.main
      : theme.palette.text.primary

  const displayValue =
    formatValue?.(value) ??
    value.toLocaleString('en-US', { maximumFractionDigits: 2 })

  const changeColor =
    change === 0
      ? theme.palette.text.secondary
      : change > 0
      ? theme.palette.success.main
      : theme.palette.error.main

  const changeDisplay = useMemo(() => {
    const sign = change > 0 ? '+' : change < 0 ? '-' : ''
    return `${sign}${Math.abs(change).toLocaleString('en-US', {
      maximumFractionDigits: 2,
    })}`
  }, [change])

  const percentDisplay = useMemo(() => {
    const sign = changePercent > 0 ? '+' : changePercent < 0 ? '-' : ''
    return `${sign}${Math.abs(changePercent).toFixed(2)}%`
  }, [changePercent])

  const stateColor =
    marketState === 'STRESSED'
      ? theme.palette.error.main
      : marketState === 'ELEVATED'
      ? theme.palette.warning.main
      : theme.palette.success.main

  return (
    <Box
      sx={{
        overflow: 'hidden',
        border: `1px solid ${
          isVix ? alpha(theme.palette.warning.main, 0.4) : theme.palette.divider
        }`,
        borderRadius: 1,
        px: 2,
        py: 1.5,
        backgroundColor:
          direction == null
            ? theme.palette.action.hover
            : alpha(flashColor, 0.08),
        boxShadow:
          direction == null ? 'none' : `0 0 0 2px ${alpha(flashColor, 0.25)}`,
        transition:
          'border-color 150ms ease, box-shadow 150ms ease, background-color 150ms ease',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          background:
            changePercent >= 0
              ? `linear-gradient(135deg, ${alpha(
                  theme.palette.success.main,
                  0.25,
                )}, transparent)`
              : `linear-gradient(135deg, ${alpha(
                  theme.palette.error.main,
                  0.25,
                )}, transparent)`,
        }}
      />

      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {isVix ? (
              <AutoAwesomeIcon
                sx={{ fontSize: 16, color: theme.palette.warning.main }}
              />
            ) : null}
            <Typography
              sx={{
                fontFamily: theme.typography.fontFamilyMono,
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.08em',
              }}
            >
              {symbol}
            </Typography>
          </Box>
          <Badge
            sx={{
              color: stateColor,
              backgroundColor: alpha(stateColor, 0.12),
              border: `5px solid ${alpha(stateColor, 0.3)}`,
              borderRadius: '50%',
              height: 'auto',
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 0.5 }}>
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamilyMono,
              fontSize: '1.25rem',
              fontWeight: 700,
              lineHeight: 1.2,
              padding: 0.5,
              color:
                direction == null ? theme.palette.text.primary : flashColor,
              transition: 'color 150ms ease',
              ...(direction == null
                ? {
                    backgroundColor: alpha(theme.palette.text.primary, 0.0),
                  }
                : {
                    backgroundColor: alpha(flashColor, 0.2),
                    borderRadius: 1,
                  }),
            }}
          >
            {displayValue}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {changePercent > 0 ? (
            <TrendingUpIcon
              sx={{ fontSize: 16, color: theme.palette.success.main }}
            />
          ) : changePercent < 0 ? (
            <TrendingDownIcon
              sx={{ fontSize: 16, color: theme.palette.error.main }}
            />
          ) : null}
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamilyMono,
              fontSize: '0.85rem',
              color: changeColor,
            }}
          >
            {changeDisplay}
          </Typography>
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamilyMono,
              fontSize: '0.85rem',
              color: changeColor,
            }}
          >
            {percentDisplay}
          </Typography>
        </Box>

        <Divider
          sx={{ my: 1.5, borderColor: alpha(theme.palette.divider, 0.1) }}
        />

        <Grid container spacing={1}>
          <Grid size={{ xs: 6 }}>
            <Typography
              sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary }}
            >
              H:
              <Box
                component="span"
                sx={{
                  ml: 0.5,
                  fontFamily: theme.typography.fontFamilyMono,
                  color: theme.palette.text.primary,
                }}
              >
                {high.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </Box>
            </Typography>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Typography
              sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary }}
            >
              L:
              <Box
                component="span"
                sx={{
                  ml: 0.5,
                  fontFamily: theme.typography.fontFamilyMono,
                  color: theme.palette.text.primary,
                }}
              >
                {low.toLocaleString('en-US', { maximumFractionDigits: 2 })}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
