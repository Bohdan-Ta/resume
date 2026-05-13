import { Box, Card, CardContent, Chip, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { PROJECTS } from '@/data/projects'

export const Projects = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer id="projects">
      <SectionEyebrow index={4} label={t('projects.eyebrow')} />
      <Typography variant="h2" sx={{ mb: 1 }}>
        {t('projects.eyebrow')}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 5, maxWidth: 640 }}>
        {t('projects.intro')}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
          },
          gap: { xs: 3, md: 4 },
        }}
      >
        {PROJECTS.map((project) => (
          <Card
            key={project.id}
            elevation={0}
            sx={{
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 240ms, border-color 240ms, box-shadow 240ms',
              '&:hover': {
                transform: 'translateY(-2px)',
                borderColor: 'primary.main',
                boxShadow: 2,
                '& .project-image': { filter: 'saturate(1.05)', transform: 'scale(1.02)' },
              },
            }}
          >
            {project.image && (
              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: '16 / 10',
                  overflow: 'hidden',
                  bgcolor: 'background.default',
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={t(`${project.i18nKey}.title`)}
                  loading="lazy"
                  className="project-image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'saturate(0.8)',
                    transition: 'filter 320ms, transform 320ms',
                  }}
                />
              </Box>
            )}

            <CardContent
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                gap: 2,
              }}
            >
              <Stack
                direction="row"
                sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: 'text.disabled', letterSpacing: '0.12em' }}
                >
                  {project.year} · {t(`projects.roles.${project.role}`)}
                </Typography>
                <Stack direction="row" sx={{ gap: 0.25 }}>
                  {project.links.github && (
                    <Tooltip title={t('projects.links.github')}>
                      <IconButton
                        component="a"
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t(`${project.i18nKey}.title`)} — ${t('projects.links.github')}`}
                        size="small"
                        sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                      >
                        <FaGithub size={16} />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.links.live && (
                    <Tooltip title={t('projects.links.live')}>
                      <IconButton
                        component="a"
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t(`${project.i18nKey}.title`)} — ${t('projects.links.live')}`}
                        size="small"
                        sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                      >
                        <HiOutlineExternalLink size={18} />
                      </IconButton>
                    </Tooltip>
                  )}
                </Stack>
              </Stack>

              <Typography variant="h4" sx={{ fontSize: '1.5rem', fontWeight: 400 }}>
                {t(`${project.i18nKey}.title`)}
              </Typography>
              <Typography sx={{ color: 'text.secondary', flex: 1, lineHeight: 1.6 }}>
                {t(`${project.i18nKey}.description`)}
              </Typography>

              <Stack direction="row" sx={{ gap: 0.75, flexWrap: 'wrap', mt: 1 }}>
                {project.tech.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{
                      height: 24,
                      fontSize: '0.7rem',
                      fontFamily: 'caption.fontFamily',
                      color: 'text.secondary',
                      borderColor: 'divider',
                    }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </SectionContainer>
  )
}
