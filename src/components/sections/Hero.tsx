import { ArrowForward, FileDownloadOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import portraitLarge from '@/assets/portrait-bohdan.webp'
import portraitSmall from '@/assets/portrait-bohdan-sm.webp'
import { SectionContainer } from '@/components/common/SectionContainer'
import { profile } from '@/data/profile'

export const Hero = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer id="hero" sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 8, md: 14 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' },
          gap: { xs: 6, md: 8 },
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              display: 'block',
              letterSpacing: '0.12em',
              mb: 2,
            }}
          >
            {`// 01 · ${t('hero.greeting')}`}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '5.5rem' },
              lineHeight: 1,
              mb: 3,
            }}
          >
            {t('hero.name')}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              mb: 1,
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            {t('hero.role')}
          </Typography>
          <Typography
            sx={{
              color: 'text.disabled',
              mb: 4,
              fontFamily: 'caption.fontFamily',
              fontSize: '0.875rem',
              letterSpacing: '0.04em',
            }}
          >
            {t('hero.stack')}
          </Typography>

          <Stack direction="row" sx={{ gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              component="a"
              href={`mailto:${profile.email}`}
              sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
            >
              {t('hero.cta.contact')}
            </Button>
            <Button
              variant="outlined"
              component="a"
              href={profile.cvHref}
              download
              startIcon={<FileDownloadOutlined />}
              sx={{
                borderColor: 'divider',
                color: 'text.primary',
                '&:hover': { borderColor: 'text.primary', bgcolor: 'transparent' },
              }}
            >
              {t('hero.cta.cv')}
            </Button>
          </Stack>

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
              letterSpacing: '0.06em',
              color: 'text.secondary',
              maxWidth: '100%',
            }}
          >
            <Box
              component="span"
              aria-hidden
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                boxShadow: (theme) => `0 0 0 4px ${theme.palette.primary.main}25`,
                flexShrink: 0,
                animation: 'hero-pulse 2.4s ease-in-out infinite',
                '@keyframes hero-pulse': {
                  '0%, 100%': { boxShadow: (theme) => `0 0 0 0 ${theme.palette.primary.main}55` },
                  '50%': { boxShadow: (theme) => `0 0 0 6px ${theme.palette.primary.main}00` },
                },
              }}
            />
            <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
              {t('currently.label')}
            </Box>
            <Box component="span" sx={{ whiteSpace: 'normal' }}>
              {t('currently.value')}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            aspectRatio: '3 / 4',
            maxWidth: 360,
            mx: 'auto',
            width: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'primary.main',
              transform: 'translate(12px, 12px)',
              opacity: 0.5,
            }}
          />
          <Box
            component="img"
            src={portraitLarge}
            srcSet={`${portraitSmall} 600w, ${portraitLarge} 1200w`}
            sizes="(max-width: 900px) 0px, 360px"
            alt="Bohdan Tatarchuk"
            loading="eager"
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 3,
              filter: 'saturate(0.92)',
              transition: 'filter 320ms',
              '&:hover': { filter: 'saturate(1.05)' },
            }}
          />
        </Box>
      </Box>
    </SectionContainer>
  )
}
