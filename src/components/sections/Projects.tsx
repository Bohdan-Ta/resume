import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Collapse,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { PROJECTS, type Project } from '@/data/projects'

type CardProps = {
  project: Project
}

const ProjectLinks = ({ project }: CardProps) => {
  const { t } = useTranslation()
  const title = t(`${project.i18nKey}.title`)
  return (
    <Stack direction="row" sx={{ gap: 0.25 }}>
      {project.links.github && (
        <Tooltip title={t('projects.links.github')}>
          <IconButton
            component="a"
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — ${t('projects.links.github')}`}
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
            aria-label={`${title} — ${t('projects.links.live')}`}
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            <HiOutlineExternalLink size={18} />
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  )
}

const TechChips = ({ tech, limit }: { tech: string[]; limit?: number }) => {
  const visible = limit ? tech.slice(0, limit) : tech
  const overflow = limit ? tech.length - limit : 0
  return (
    <Stack direction="row" sx={{ gap: 0.75, flexWrap: 'wrap' }}>
      {visible.map((item) => (
        <Chip
          key={item}
          label={item}
          size="small"
          variant="outlined"
          sx={{
            height: 24,
            fontSize: '0.75rem',
            fontFamily: 'caption.fontFamily',
            color: 'text.secondary',
            borderColor: 'divider',
          }}
        />
      ))}
      {overflow > 0 && (
        <Chip
          label={`+${overflow}`}
          size="small"
          variant="outlined"
          sx={{
            height: 24,
            fontSize: '0.75rem',
            fontFamily: 'caption.fontFamily',
            color: 'text.tertiary',
            borderColor: 'divider',
          }}
        />
      )}
    </Stack>
  )
}

const FullProjectCard = ({ project }: CardProps) => {
  const { t } = useTranslation()
  return (
    <Card
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
            width: '100%',
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
              position: 'absolute',
              inset: 0,
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'saturate(0.8)',
              transition: 'filter 320ms, transform 320ms',
            }}
          />
        </Box>
      )}

      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1, gap: 2 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Typography variant="overline" sx={{ color: 'text.tertiary', letterSpacing: '0.12em' }}>
            {project.year} · {t(`projects.roles.${project.role}`)}
          </Typography>
          <ProjectLinks project={project} />
        </Stack>

        <Typography variant="h4" sx={{ fontWeight: 400 }}>
          {t(`${project.i18nKey}.title`)}
        </Typography>
        <Typography sx={{ color: 'text.secondary', flex: 1, lineHeight: 1.6 }}>
          {t(`${project.i18nKey}.description`)}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <TechChips tech={project.tech} />
        </Box>
      </CardContent>
    </Card>
  )
}

const CompactProjectCard = ({ project }: CardProps) => {
  const { t } = useTranslation()
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        transition: 'border-color 240ms, transform 240ms',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-1px)',
          '& .project-image': { filter: 'saturate(1.05)' },
        },
      }}
    >
      {project.image && (
        <Box
          sx={{
            position: 'relative',
            flexShrink: 0,
            width: 88,
            alignSelf: 'stretch',
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
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'saturate(0.8)',
              transition: 'filter 320ms',
            }}
          />
        </Box>
      )}
      <CardContent
        sx={{
          p: 2,
          pl: project.image ? 2 : 2.5,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.75,
          flex: 1,
          minWidth: 0,
          '&:last-child': { pb: 2 },
        }}
      >
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Typography
            variant="overline"
            sx={{ color: 'text.tertiary', letterSpacing: '0.12em', fontSize: '0.7rem' }}
          >
            {project.year} · {t(`projects.roles.${project.role}`)}
          </Typography>
          <ProjectLinks project={project} />
        </Stack>
        <Typography
          sx={{
            fontFamily: 'h4.fontFamily',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {t(`${project.i18nKey}.title`)}
        </Typography>
        <TechChips tech={project.tech} limit={3} />
      </CardContent>
    </Card>
  )
}

export const Projects = () => {
  const { t } = useTranslation()
  const [showEarlier, setShowEarlier] = useState(false)

  const featured = PROJECTS.filter((p) => p.featured)
  const earlier = PROJECTS.filter((p) => !p.featured)

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
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: { xs: 3, md: 4 },
        }}
      >
        {featured.map((project) => (
          <FullProjectCard key={project.id} project={project} />
        ))}
      </Box>

      {earlier.length > 0 && (
        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}
          >
            <Typography variant="overline" sx={{ color: 'text.tertiary', letterSpacing: '0.12em' }}>
              {`// ${t('projects.earlierHeading')}`}
            </Typography>
            <Button
              onClick={() => setShowEarlier((v) => !v)}
              endIcon={showEarlier ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              aria-expanded={showEarlier}
              aria-controls="earlier-projects"
              sx={{
                color: 'text.primary',
                fontFamily: 'overline.fontFamily',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
              }}
            >
              {showEarlier
                ? t('projects.hideEarlier')
                : t('projects.showEarlier', { count: earlier.length })}
            </Button>
          </Stack>

          <Collapse in={showEarlier} timeout="auto" unmountOnExit>
            <Box
              id="earlier-projects"
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: { xs: 2, md: 2.5 },
              }}
            >
              {earlier.map((project) => (
                <CompactProjectCard key={project.id} project={project} />
              ))}
            </Box>
          </Collapse>
        </Box>
      )}
    </SectionContainer>
  )
}
