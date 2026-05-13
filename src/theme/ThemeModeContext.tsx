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
  cycleMode: () => void
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null)

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(readStoredMode)
  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)', { defaultMatches: true })

  const resolvedMode: ResolvedMode =
    mode === 'system' ? (systemPrefersDark ? 'dark' : 'light') : mode

  useEffect(() => {
    document.documentElement.style.colorScheme = resolvedMode
  }, [resolvedMode])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const cycleMode = useCallback(() => {
    setMode((prev) => (prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system'))
  }, [])

  const value = useMemo(
    () => ({ mode, resolvedMode, cycleMode }),
    [mode, resolvedMode, cycleMode],
  )

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>
}

export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext)
  if (!ctx) throw new Error('useThemeMode must be used inside ThemeModeProvider')
  return ctx
}
