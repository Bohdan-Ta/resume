import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionContainer } from './components/common/SectionContainer'
import { Layout } from './components/layout/Layout'
import { NAV_ITEMS } from './components/layout/navConfig'

const SectionPlaceholder = ({
  id,
  index,
  labelKey,
}: {
  id: string
  index: number
  labelKey: string
}) => {
  const { t } = useTranslation()
  return (
    <SectionContainer id={id}>
      <Typography
        variant="overline"
        sx={{ color: 'text.disabled', display: 'block', letterSpacing: '0.12em', mb: 1 }}
      >
        {`// 0${index + 2} · ${t(labelKey)}`}
      </Typography>
      <Typography variant="h2" sx={{ mb: 3 }}>
        {t(labelKey)}
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>Section coming in Phase 6.</Typography>
    </SectionContainer>
  )
}

export const App = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SectionContainer id="hero" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.disabled', display: 'block', letterSpacing: '0.12em', mb: 2 }}
        >
          {`// 01 · ${t('hero.greeting')}`}
        </Typography>
        <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '3rem', md: '5.5rem' } }}>
          {t('hero.name')}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 4 }}>
          {t('hero.role')} · {t('hero.stack')}
        </Typography>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1.5,
            px: 2,
            py: 1,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            fontFamily: 'overline.fontFamily',
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            color: 'text.secondary',
          }}
        >
          <Box
            component="span"
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'primary.main',
              boxShadow: (theme) => `0 0 0 4px ${theme.palette.primary.main}25`,
            }}
          />
          {t('currently.label')}: {t('currently.value')}
        </Box>
      </SectionContainer>

      {NAV_ITEMS.map((item, idx) => (
        <SectionPlaceholder key={item.id} id={item.id} index={idx} labelKey={item.i18nKey} />
      ))}
    </Layout>
  )
}
