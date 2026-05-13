import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { TIMELINE } from '@/data/timeline'

export const Experience = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer id="experience">
      <SectionEyebrow index={5} label={t('experience.eyebrow')} />
      <Typography variant="h2" sx={{ mb: 1 }}>
        {t('experience.eyebrow')}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 6, maxWidth: 640 }}>
        {t('experience.intro')}
      </Typography>

      <Box
        sx={{
          position: 'relative',
          pl: { xs: 3, md: 4 },
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        {TIMELINE.map((entry) => {
          const titleKey = `timeline.entries.${entry.id}.title`
          const subtitleKey = `timeline.entries.${entry.id}.subtitle`
          const rawBullets = t(`timeline.entries.${entry.id}.bullets`, {
            returnObjects: true,
          })
          const bullets = Array.isArray(rawBullets) ? (rawBullets as string[]) : []
          const dateLabel = entry.to === 'present' ? t('timeline.present') : entry.to
          const kindLabel = t(`timeline.kinds.${entry.kind}`)

          return (
            <Box
              key={entry.id}
              sx={{
                position: 'relative',
                pb: 6,
                '&:last-child': { pb: 0 },
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  left: { xs: -29, md: -37 },
                  top: 6,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                  border: '2px solid',
                  borderColor: entry.to === 'present' ? 'primary.main' : 'text.tertiary',
                  boxShadow:
                    entry.to === 'present'
                      ? (theme) => `0 0 0 4px ${theme.palette.primary.main}25`
                      : 'none',
                }}
              />

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ alignItems: { sm: 'baseline' }, gap: { xs: 0.5, sm: 2 }, mb: 1 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    fontFamily: 'overline.fontFamily',
                    color: 'primary.main',
                    letterSpacing: '0.12em',
                    fontSize: '0.75rem',
                    minWidth: 140,
                  }}
                >
                  {entry.from} — {dateLabel}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'caption.fontFamily',
                    color: 'text.tertiary',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {kindLabel}
                </Typography>
              </Stack>

              <Typography
                variant="h4"
                sx={{ fontSize: { xs: '1.375rem', md: '1.5rem' }, mb: 0.25 }}
              >
                {t(titleKey)}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>{t(subtitleKey)}</Typography>

              {bullets.length > 0 && (
                <Stack component="ul" spacing={0.75} sx={{ pl: 2.5, my: 0 }}>
                  {bullets.map((bullet) => (
                    <Box
                      component="li"
                      key={bullet.slice(0, 32)}
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        '&::marker': { color: 'primary.main' },
                      }}
                    >
                      {bullet}
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
          )
        })}
      </Box>
    </SectionContainer>
  )
}
