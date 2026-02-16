import {
  Breakpoints,
  createTheme,
  CSSProperties,
  darkScrollbar,
  PaletteMode,
  Theme,
  ThemeOptions,
  TypographyVariantsOptions,
} from '@mui/material'
import { deepOrange, grey, teal } from '@mui/material/colors'

const fontFamily: TypographyVariantsOptions['fontFamily'] = [
  'Roboto',
  'sans-serif',
].join(',')
const fontFamilySerif: TypographyVariantsOptions['fontFamilySerif'] = [
  'Roboto Serif',
  'serif',
].join(',')
const fontFamilyMono: TypographyVariantsOptions['fontFamilyMono'] = [
  'Roboto Mono',
  'monospace',
].join(',')
const fontVariantNumeric = (
  ['normal'] satisfies CSSProperties['fontVariantNumeric']
).join(' ')

function getSafeAreaInsetGutters(
  params: Pick<Theme, 'breakpoints' | 'typography'>,
) {
  const {
    breakpoints,
    typography: { htmlFontSize },
  } = params

  return {
    [breakpoints.up('sm')]: {
      paddingLeft: `max(${htmlFontSize * 1.5}px, env(safe-area-inset-left))`,
      paddingRight: `max(${htmlFontSize * 1.5}px, env(safe-area-inset-right))`,
    },
    paddingLeft: `max(${htmlFontSize}px, env(safe-area-inset-left))`,
    paddingRight: `max(${htmlFontSize}px, env(safe-area-inset-right))`,
  }
}

export const breakpointsValues: Omit<Breakpoints['values'], 'mdUp' | 'smDown'> =
  {
    lg: 1200,
    md: 900,
    sm: 600,
    xl: 1536,
    xs: 0,
  }

export const getAppTheme = (mode: PaletteMode) => {
  const {
    palette: { augmentColor },
  } = createTheme({ palette: { mode } })
  const isLightMode = mode === 'light'
  const modeColorShade = isLightMode ? 700 : 300
  const themeOptions: ThemeOptions = {
    breakpoints: {
      keys: ['xs', 'sm', 'mdUp', 'md', 'lg', 'xl'],
      values: {
        ...breakpointsValues,
        mdUp: 1050,
        smDown: 400,
      },
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          message: { margin: 'unset' },
        },
      },
      MuiAlertTitle: {
        styleOverrides: {
          root: { lineHeight: 1.2 },
        },
      },
      MuiButton: {
        styleOverrides: {
          endIcon: {
            marginLeft: 'unset',
            marginRight: 'unset',
          },
          root: {
            columnGap: 'round(0.5em, 1px)',
            letterSpacing: '0.05em',
          },
          startIcon: {
            marginLeft: 'unset',
            marginRight: 'unset',
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            fontFamily,
            fontVariantNumeric,
          },
        },
      },
      MuiContainer: {
        defaultProps: { maxWidth: 'xl' },
        styleOverrides: {
          root: ({
            ownerState: { disableGutters },
            theme: { breakpoints, typography },
          }) => ({
            ...(disableGutters
              ? {}
              : getSafeAreaInsetGutters({ breakpoints, typography })),
          }),
        },
      },
      MuiCssBaseline: {
        styleOverrides: (themeParams) => ({
          body: themeParams.palette.mode === 'dark' ? darkScrollbar() : null,
          'dd, dl': {
            lineHeight: '1rem',
            margin: 'unset',
          },
          html: {
            minHeight: '100%',
            position: 'relative',
          },
          'html, body': {
            margin: 'unset',
            padding: 'unset',
            width: '100%',
          },
        }),
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            letterSpacing: '0.03125rem',
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          input: {
            fontWeight: 600,
          },
          root: {
            fontVariantNumeric: 'normal',
          },
        },
      },
      MuiLink: {
        defaultProps: { underline: 'always' },
        styleOverrides: {
          root: {
            textUnderlineOffset: '0.125em',
          },
          underlineAlways: {
            textDecoration: 'underline',
          },
        },
      },
      // @ts-ignore: Lab component
      MuiMasonry: {
        styleOverrides: {
          root: {
            width: 'unset',
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: ({
            ownerState: { disableGutters },
            theme: { breakpoints, typography },
          }) => ({
            ...(disableGutters
              ? {}
              : getSafeAreaInsetGutters({ breakpoints, typography })),
          }),
        },
      },
    },
    palette: {
      ...(isLightMode && { background: { default: grey[100] } }),
      buy: augmentColor({
        color: { main: teal[modeColorShade] },
      }),
      mode,
      sell: augmentColor({
        color: { main: deepOrange[modeColorShade] },
      }),
    },
    typography: {
      allVariants: {
        fontFeatureSettings: ['"kern"', '"liga"', '"clig"', '"calt"'].join(),
        fontVariantNumeric,
        WebkitFontSmoothing: 'auto',
      },
      fontFamily,
      fontFamilyMono,
      fontFamilySerif,
      fontWeightBold: 700,
      fontWeightLight: 300,
      fontWeightMedium: 500,
      fontWeightRegular: 400,
    },
  }

  return createTheme(themeOptions)
}
