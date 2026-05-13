import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter-tight'
import '@fontsource-variable/jetbrains-mono'
import { App } from './App'
import { darkTheme, lightTheme } from './theme'
import { ThemeModeProvider, useThemeMode } from './theme/ThemeModeContext'

const ThemedApp = () => {
  const { resolvedMode } = useThemeMode()
  return (
    <ThemeProvider theme={resolvedMode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element #root not found')

createRoot(rootEl).render(
  <StrictMode>
    <ThemeModeProvider>
      <ThemedApp />
    </ThemeModeProvider>
  </StrictMode>,
)
