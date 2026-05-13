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

export const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: accent[300],
          main: accent[400],
          dark: accent[600],
          contrastText: '#FFFFFF',
        },
        background: {
          default: neutralsLight.canvas,
          paper: neutralsLight.surface,
        },
        text: {
          primary: neutralsLight.textPrimary,
          secondary: neutralsLight.textSecondary,
          disabled: neutralsLight.textMuted,
        },
        divider: neutralsLight.borderSubtle,
        success: { main: semantic.light.success },
        warning: { main: semantic.light.warning },
        error: { main: semantic.light.error },
      },
    },
    dark: {
      palette: {
        primary: {
          light: accent[300],
          main: accent[400],
          dark: accent[600],
          contrastText: '#15130F',
        },
        background: {
          default: neutralsDark.canvas,
          paper: neutralsDark.surface,
        },
        text: {
          primary: neutralsDark.textPrimary,
          secondary: neutralsDark.textSecondary,
          disabled: neutralsDark.textMuted,
        },
        divider: neutralsDark.borderSubtle,
        success: { main: semantic.dark.success },
        warning: { main: semantic.dark.warning },
        error: { main: semantic.dark.error },
      },
    },
  },
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
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        html: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        },
        body: {
          margin: 0,
          minHeight: '100dvh',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
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
        root: {
          borderRadius: radius.lg,
          backgroundImage: 'none',
        },
      },
    },
  },
})

export type AppTheme = typeof theme
