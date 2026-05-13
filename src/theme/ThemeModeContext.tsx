import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export type ThemeMode = 'system' | 'light' | 'dark'
export type ResolvedMode = 'light' | 'dark'

const STORAGE_KEY = 'theme-mode'

type ThemeModeContextValue = {
  mode: ThemeMode
  resolvedMode: ResolvedMode
  setMode: (mode: ThemeMode) => void
  cycleMode: () => void
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null)

const readStoredMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'system'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}

const getSystemMode = (): ResolvedMode =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode)
  const [systemMode, setSystemMode] = useState<ResolvedMode>(getSystemMode)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setSystemMode(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const resolvedMode: ResolvedMode = mode === 'system' ? systemMode : mode

  useEffect(() => {
    document.documentElement.setAttribute('data-mui-color-scheme', resolvedMode)
  }, [resolvedMode])

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const cycleMode = useCallback(() => {
    setModeState((prev) => {
      const next: ThemeMode = prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ mode, resolvedMode, setMode, cycleMode }),
    [mode, resolvedMode, setMode, cycleMode],
  )

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>
}

export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext)
  if (!ctx) throw new Error('useThemeMode must be used inside ThemeModeProvider')
  return ctx
}
