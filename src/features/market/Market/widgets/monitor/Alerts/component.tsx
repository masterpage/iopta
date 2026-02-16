import { useMemo, useState } from 'react'

import {
  Badge,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import CloseIcon from '@mui/icons-material/Close'
import { alpha } from '@mui/material/styles'

import { Widget, WidgetProps } from '@/components'
import { mockAlerts, typeLabels } from 'src/data/alerts'

function formatRelativeTime(timestamp: string) {
  const now = Date.now()
  const then = new Date(timestamp).getTime()
  const diffMs = Math.max(0, now - then)
  const minutes = Math.floor(diffMs / (1000 * 60))
  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export function Alerts(props: Omit<WidgetProps, 'title'>) {
  const { palette, typography } = useTheme()
  const [acknowledgedIds, setAcknowledgedIds] = useState<Set<string>>(new Set())
  const alerts = mockAlerts

  const severityConfig = useMemo(
    () => ({
      CRITICAL: {
        bg: alpha(palette.error.main, 0.08),
        border: alpha(palette.error.main, 0.3),
        color: palette.error.main,
        icon: ErrorOutlineIcon,
      },
      INFO: {
        bg: alpha(palette.info.main, 0.08),
        border: alpha(palette.info.main, 0.3),
        color: palette.info.main,
        icon: InfoOutlinedIcon,
      },
      WARNING: {
        bg: alpha(palette.warning.main, 0.08),
        border: alpha(palette.warning.main, 0.3),
        color: palette.warning.main,
        icon: WarningAmberIcon,
      },
    }),
    [palette.error.main, palette.info.main, palette.warning.main],
  )

  const visibleAlerts = alerts.filter((a) => !acknowledgedIds.has(a.id))
  const unacknowledgedCount = alerts.filter(
    (a) => !a.acknowledged && !acknowledgedIds.has(a.id),
  ).length

  const handleAcknowledge = (id: string) => {
    setAcknowledgedIds((prev) => new Set([...prev, id]))
  }

  return (
    <Widget
      {...props}
      title={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          Alerts
          {unacknowledgedCount > 0 ? (
            <Badge
              color="error"
              badgeContent={unacknowledgedCount}
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  minWidth: 18,
                  height: 18,
                },
              }}
            />
          ) : null}
        </Box>
      }
    >
      <Box
        sx={{
          maxHeight: 350,
          overflow: 'auto',
          pr: 1,
        }}
      >
        {visibleAlerts.length === 0 ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ py: 6, color: palette.text.secondary }}
            spacing={1}
          >
            <CheckCircleOutlineIcon
              sx={{ fontSize: 32, color: palette.success.main }}
            />
            <Typography sx={{ fontSize: '0.9rem' }}>
              All alerts acknowledged
            </Typography>
          </Stack>
        ) : (
          <Stack spacing={1.5}>
            {visibleAlerts.map((alert) => {
              const config = severityConfig[alert.severity]
              const Icon = config.icon

              return (
                <Box
                  key={alert.id}
                  sx={{
                    borderRadius: 1,
                    border: `1px solid ${config.border}`,
                    backgroundColor: config.bg,
                    p: 1.5,
                  }}
                >
                  <Box
                    sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}
                  >
                    <Icon
                      sx={{ fontSize: 18, color: config.color, mt: 0.25 }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 0.5,
                        }}
                      >
                        <Box
                          sx={{
                            px: 0.75,
                            py: 0.25,
                            borderRadius: 0.75,
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            fontFamily: typography.fontFamilyMono,
                            color: config.color,
                            backgroundColor: config.bg,
                            border: `1px solid ${alpha(config.color, 0.3)}`,
                          }}
                        >
                          {typeLabels[alert.type]}
                        </Box>
                        {alert.symbol ? (
                          <Typography
                            sx={{
                              fontFamily: typography.fontFamilyMono,
                              fontSize: '0.75rem',
                              fontWeight: 600,
                            }}
                          >
                            {alert.symbol}
                          </Typography>
                        ) : null}
                      </Box>
                      <Typography sx={{ fontSize: '0.85rem' }}>
                        {alert.message}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.7rem',
                          color: palette.text.secondary,
                          mt: 0.5,
                        }}
                      >
                        {formatRelativeTime(alert.timestamp)}
                      </Typography>
                    </Box>
                    <IconButton
                      size="small"
                      onClick={() => handleAcknowledge(alert.id)}
                      sx={{
                        color: palette.text.secondary,
                        '&:hover': {
                          backgroundColor: alpha(palette.text.primary, 0.08),
                        },
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              )
            })}
          </Stack>
        )}
      </Box>
    </Widget>
  )
}
