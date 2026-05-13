import { Box, Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { LanguageSwitch } from './components/common/LanguageSwitch'
import { ThemeToggle } from './components/common/ThemeToggle'

export const App = () => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack direction="row" sx={{ justifyContent: 'flex-end', gap: 1, mb: 6 }}>
          <LanguageSwitch />
          <ThemeToggle />
        </Stack>
        <Typography variant="overline" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
          {t('hero.greeting')}
        </Typography>
        <Typography variant="h1" sx={{ mb: 2 }}>
          {t('hero.name')}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
          {t('hero.role')} · {t('hero.stack')}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.disabled', mb: 4 }}>
          {t('hero.location')}
        </Typography>
        <Typography variant="overline" color="primary">
          {t('currently.label')}: {t('currently.value')}
        </Typography>
      </Container>
    </Box>
  )
}
