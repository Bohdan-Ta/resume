import useMediaQuery from '@mui/material/useMediaQuery'
import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export type ThemeMode = 'system' | 'light' | 'dark'
export type ResolvedMode = 'light' | 'dark'

const STORAGE_KEY = 'theme-mode'

const readStoredMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'system'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}

type ThemeModeContextValue = {
  mode: ThemeMode
  resolvedMode: ResolvedMode
  setMode: (mode: ThemeMode) => void
  cycleMode: () => void
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null)

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode)
  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)', { defaultMatches: true })

  const resolvedMode: ResolvedMode =
    mode === 'system' ? (systemPrefersDark ? 'dark' : 'light') : mode

  useEffect(() => {
    document.documentElement.style.colorScheme = resolvedMode
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
