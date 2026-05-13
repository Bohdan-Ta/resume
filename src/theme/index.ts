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

const shadows = {
  light: [
    'none',
    '0 1px 2px rgba(20,17,12,0.04), 0 0 0 1px rgba(20,17,12,0.04)',
    '0 4px 12px rgba(20,17,12,0.06), 0 0 0 1px rgba(20,17,12,0.05)',
    '0 12px 32px rgba(20,17,12,0.10), 0 0 0 1px rgba(20,17,12,0.06)',
  ],
  dark: [
    'none',
    '0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
    '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
    '0 12px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
  ],
}

const shadowsArray = (mode: 'light' | 'dark') => {
  const base = shadows[mode]
  const arr: string[] = ['none']
  for (let i = 1; i <= 24; i++) {
    arr.push(base[Math.min(i, base.length - 1)] ?? 'none')
  }
  return arr as unknown as string[]
}

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data',
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
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
        mode: 'dark',
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
  shadows: shadowsArray('light') as never,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          colorScheme: 'light dark',
        },
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
