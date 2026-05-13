export const accent = {
  50: '#FBF1ED',
  100: '#F5DDD0',
  200: '#ECC4B0',
  300: '#E2A88B',
  400: '#E07856',
  500: '#D45F3A',
  600: '#B84A28',
  700: '#94391E',
  800: '#6F2A16',
  900: '#3F1709',
} as const

export const neutralsLight = {
  canvas: '#FAF8F5',
  surface: '#FFFFFF',
  surfaceElevated: '#F4F1EC',
  borderSubtle: '#E8E3DB',
  borderStrong: '#C9C2B5',
  textPrimary: '#1A1714',
  textSecondary: '#5A544A',
  textMuted: '#8A8377',
} as const

export const neutralsDark = {
  canvas: '#15130F',
  surface: '#1E1B17',
  surfaceElevated: '#27241F',
  borderSubtle: '#2E2A24',
  borderStrong: '#3F3A33',
  textPrimary: '#F2EEE6',
  textSecondary: '#A8A095',
  textMuted: '#6B6459',
} as const

export const semantic = {
  light: {
    success: '#3B7A57',
    warning: '#C97B1F',
    error: '#B33A3A',
  },
  dark: {
    success: '#5FA77A',
    warning: '#E8A858',
    error: '#E07171',
  },
} as const

export const radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 20,
  full: 9999,
} as const

export const duration = {
  instant: 100,
  fast: 200,
  base: 300,
  slow: 500,
} as const

export const easing = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  emphasize: 'cubic-bezier(0.3, 0, 0, 1.2)',
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
} as const

export const fontFamily = {
  display: "'Inter Tight Variable', 'Inter Tight', system-ui, -apple-system, sans-serif",
  body: "'Inter Tight Variable', 'Inter Tight', system-ui, -apple-system, sans-serif",
  mono: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, 'SF Mono', monospace",
} as const

export const typography = {
  displayXl: { fontSize: '5.5rem', lineHeight: 1.0, fontWeight: 200, letterSpacing: '-0.04em' },
  displayLg: { fontSize: '3.5rem', lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.03em' },
  displayMd: { fontSize: '2.5rem', lineHeight: 1.1, fontWeight: 400, letterSpacing: '-0.02em' },
  headingLg: { fontSize: '1.5rem', lineHeight: 1.3, fontWeight: 500, letterSpacing: '-0.01em' },
  headingMd: { fontSize: '1.25rem', lineHeight: 1.4, fontWeight: 500, letterSpacing: 0 },
  bodyLg: { fontSize: '1.125rem', lineHeight: 1.6, fontWeight: 400 },
  bodyMd: { fontSize: '1rem', lineHeight: 1.6, fontWeight: 400 },
  bodySm: { fontSize: '0.875rem', lineHeight: 1.5, fontWeight: 400 },
  monoMd: { fontSize: '0.875rem', lineHeight: 1.4, fontWeight: 500 },
  monoSm: { fontSize: '0.75rem', lineHeight: 1.4, fontWeight: 500, letterSpacing: '0.05em' },
} as const
