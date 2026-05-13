import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './components/common/ThemeToggle'

const ThemeDebug = () => {
  const { mode, systemMode } = useColorScheme()
  const [attr, setAttr] = useState('')
  const [varBg, setVarBg] = useState('')

  useEffect(() => {
    const update = () => {
      setAttr(document.documentElement.getAttribute('data-mui-color-scheme') ?? '(none)')
      setVarBg(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--mui-palette-background-default')
          .trim() || '(unset)',
      )
    }
    update()
    const obs = new MutationObserver(update)
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mui-color-scheme'],
    })
    return () => obs.disconnect()
  }, [])

  return (
    <Paper sx={{ p: 2, fontFamily: 'monospace', fontSize: 12 }}>
      <div>mode: {mode ?? '(null)'}</div>
      <div>systemMode: {systemMode ?? '(null)'}</div>
      <div>html[data-mui-color-scheme]: {attr}</div>
      <div>--mui-palette-background-default: {varBg}</div>
    </Paper>
  )
}

export const App = () => {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack direction="row" sx={{ justifyContent: 'flex-end', mb: 6 }}>
          <ThemeToggle />
        </Stack>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Bohdan Tatarchuk
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 4 }}>
          Full Stack Developer · Kotlin · React · Spring Boot
        </Typography>
        <Typography variant="overline" color="primary" sx={{ display: 'block', mb: 4 }}>
          Phase 2 — theme online
        </Typography>
        <Stack spacing={2}>
          <ThemeDebug />
          <Paper sx={{ p: 3, bgcolor: 'background.paper' }}>
            <Typography>This Paper uses bgcolor: background.paper via sx</Typography>
          </Paper>
          <Box
            sx={{ p: 3, background: 'var(--mui-palette-background-paper)', color: 'text.primary' }}
          >
            <Typography>This Box uses raw var(--mui-palette-background-paper)</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
