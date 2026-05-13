import type { PaletteMode, ThemeOptions } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import {
  accent,
  duration,
  easing,
  fontFamily,
  neutralsDark,
  neutralsLight,
  radius,
  semantic,
  typography,
} from './tokens'

const sharedOptions: ThemeOptions = {
  shape: { borderRadius: radius.md },
  typography: {
    fontFamily: fontFamily.body,
    h1: { ...typography.displayXl, fontFamily: fontFamily.display },
    h2: { ...typography.displayLg, fontFamily: fontFamily.display },
    h3: { ...typography.displayMd, fontFamily: fontFamily.display },
    h4: { ...typography.headingLg, fontFamily: fontFamily.display },
    h5: { ...typography.headingMd, fontFamily: fontFamily.display },
    h6: { ...typography.headingMd, fontFamily: fontFamily.display },
    body1: typography.bodyMd,
    body2: typography.bodySm,
    subtitle1: typography.bodyLg,
    button: { textTransform: 'none', fontWeight: 500 },
    caption: { ...typography.monoSm, fontFamily: fontFamily.mono },
    overline: { ...typography.monoSm, fontFamily: fontFamily.mono, textTransform: 'uppercase' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        },
        body: { margin: 0, minHeight: '100dvh' },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: radius.md,
          paddingInline: 24,
          height: 40,
          fontWeight: 500,
          transition: `background-color ${duration.fast}ms ${easing.standard}, border-color ${duration.fast}ms ${easing.standard}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: radius.xs,
          height: 28,
          fontFamily: fontFamily.mono,
          fontSize: '0.8125rem',
          letterSpacing: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: radius.lg, backgroundImage: 'none' },
      },
    },
  },
}

const buildTheme = (mode: PaletteMode) => {
  const n = mode === 'light' ? neutralsLight : neutralsDark
  const sem = semantic[mode]
  return createTheme({
    ...sharedOptions,
    palette: {
      mode,
      primary: {
        light: accent[300],
        main: accent[400],
        dark: accent[600],
        contrastText: mode === 'light' ? '#FFFFFF' : neutralsDark.canvas,
      },
      background: { default: n.canvas, paper: n.surface },
      text: { primary: n.textPrimary, secondary: n.textSecondary, disabled: n.textMuted },
      divider: n.borderSubtle,
      success: { main: sem.success },
      warning: { main: sem.warning },
      error: { main: sem.error },
    },
  })
}

export const lightTheme = buildTheme('light')
export const darkTheme = buildTheme('dark')
