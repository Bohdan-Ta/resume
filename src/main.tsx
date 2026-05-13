import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter-tight'
import '@fontsource-variable/jetbrains-mono'
import { App } from './App'
import { theme } from './theme'
import { ThemeModeProvider } from './theme/ThemeModeContext'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element #root not found')

createRoot(rootEl).render(
  <StrictMode>
    <ThemeModeProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ThemeModeProvider>
  </StrictMode>,
)
