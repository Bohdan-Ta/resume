import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'

const HIGHLIGHTS = ['languages', 'approach', 'outside'] as const

export const About = () => {
  const { t } = useTranslation()
  const rawParagraphs = t('about.paragraphs', { returnObjects: true })
  const paragraphs = Array.isArray(rawParagraphs) ? (rawParagraphs as string[]) : []

  return (
    <SectionContainer id="about">
      <SectionEyebrow index={2} label={t('about.eyebrow')} />
      <Typography variant="h2" sx={{ mb: 5, maxWidth: 720 }}>
        {t('about.eyebrow')}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
          gap: { xs: 4, md: 8 },
          alignItems: 'start',
        }}
      >
        <Stack spacing={3}>
          {paragraphs.map((p, idx) => (
            <Typography
              key={p}
              sx={{
                color: idx === 0 ? 'text.primary' : 'text.secondary',
                fontSize: idx === 0 ? '1.125rem' : '1rem',
                lineHeight: 1.7,
                maxWidth: 640,
              }}
            >
              {p}
            </Typography>
          ))}
        </Stack>

        <Stack
          spacing={2.5}
          sx={{ pl: { md: 4 }, borderLeft: { md: '1px solid' }, borderColor: { md: 'divider' } }}
        >
          {HIGHLIGHTS.map((key) => (
            <Box key={key}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.tertiary',
                  display: 'block',
                  letterSpacing: '0.12em',
                  mb: 0.5,
                }}
              >
                {t(`about.highlights.${key}.label`)}
              </Typography>
              <Typography sx={{ color: 'text.primary', fontSize: '0.95rem', lineHeight: 1.5 }}>
                {t(`about.highlights.${key}.value`)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </SectionContainer>
  )
}
