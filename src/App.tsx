import { Box, Container, Stack, Typography } from '@mui/material'
import { ThemeToggle } from './components/common/ThemeToggle'

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
        <Typography variant="overline" color="primary">
          Phase 2 — theme online
        </Typography>
      </Container>
    </Box>
  )
}
