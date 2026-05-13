import { Box, Chip, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import type { SkillLevel } from '@/data/skills'
import { SKILL_CATEGORIES } from '@/data/skills'

const levelOrder: Record<SkillLevel, number> = {
  daily: 0,
  strong: 1,
  working: 2,
  learning: 3,
}

const LEVELS = ['daily', 'strong', 'working', 'learning'] as const satisfies readonly SkillLevel[]

type LevelVisual = {
  dotColor: string
  dotOpacity: number
  textColor: string
  borderColor: string
  borderStyle?: 'solid' | 'dashed'
}

const LEVEL_VISUAL: Record<SkillLevel, LevelVisual> = {
  daily: {
    dotColor: 'primary.main',
    dotOpacity: 1,
    textColor: 'text.primary',
    borderColor: 'primary.main',
  },
  strong: {
    dotColor: 'primary.main',
    dotOpacity: 0.6,
    textColor: 'text.primary',
    borderColor: 'divider',
  },
  working: {
    dotColor: 'text.tertiary',
    dotOpacity: 0.8,
    textColor: 'text.secondary',
    borderColor: 'divider',
  },
  learning: {
    dotColor: 'text.tertiary',
    dotOpacity: 0.4,
    textColor: 'text.tertiary',
    borderColor: 'divider',
    borderStyle: 'dashed',
  },
}

const chipSxForLevel = (level: SkillLevel) => {
  const v = LEVEL_VISUAL[level]
  return {
    borderColor: v.borderColor,
    color: v.textColor,
    ...(v.borderStyle ? { borderStyle: v.borderStyle } : {}),
    '& .level-dot': { bgcolor: v.dotColor, opacity: v.dotOpacity },
  }
}

export const Skills = () => {
  const { t } = useTranslation()
  const [tab, setTab] = useState(0)
  const active = SKILL_CATEGORIES[tab]
  if (!active) return null

  const sortedSkills = [...active.skills].sort((a, b) => levelOrder[a.level] - levelOrder[b.level])

  return (
    <SectionContainer id="skills">
      <SectionEyebrow index={3} label={t('skills.eyebrow')} />
      <Typography variant="h2" sx={{ mb: 1 }}>
        {t('skills.eyebrow')}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 4, maxWidth: 640 }}>
        {t('skills.intro')}
      </Typography>

      <Tabs
        value={tab}
        onChange={(_, value: number) => setTab(value)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label={t('skills.ariaTabs')}
        sx={{
          mb: 4,
          borderBottom: '1px solid',
          borderColor: 'divider',
          minHeight: 'auto',
          '& .MuiTabs-indicator': { bgcolor: 'primary.main', height: 2 },
          '& .MuiTab-root': {
            minHeight: 48,
            textTransform: 'none',
            fontFamily: 'overline.fontFamily',
            fontSize: '0.8125rem',
            letterSpacing: '0.08em',
            color: 'text.tertiary',
            '&.Mui-selected': { color: 'text.primary' },
          },
        }}
      >
        {SKILL_CATEGORIES.map((cat) => (
          <Tab key={cat.id} label={t(cat.i18nKey)} />
        ))}
      </Tabs>

      <Stack direction="row" sx={{ gap: 1.25, flexWrap: 'wrap' }}>
        {sortedSkills.map((skill) => {
          const Icon = skill.icon
          return (
            <Chip
              key={skill.id}
              variant="outlined"
              aria-label={`${skill.name} - ${t(`skills.levels.${skill.level}`)}`}
              title={t(`skills.levels.${skill.level}`)}
              icon={
                Icon ? (
                  <Box
                    component="span"
                    sx={{ display: 'inline-flex', alignItems: 'center', ml: 0.5 }}
                  >
                    <Icon size={14} />
                  </Box>
                ) : undefined
              }
              label={
                <Stack
                  direction="row"
                  sx={{ alignItems: 'center', gap: 0.75, fontFamily: 'caption.fontFamily' }}
                >
                  <span>{skill.name}</span>
                  <Box
                    className="level-dot"
                    aria-hidden
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      ml: 0.25,
                    }}
                  />
                </Stack>
              }
              sx={{
                height: 32,
                fontSize: '0.8125rem',
                px: 0.5,
                borderRadius: 1,
                transition: 'all 200ms',
                '& .MuiChip-icon': { color: 'inherit', ml: 0.75 },
                '&:hover': { borderColor: 'primary.main' },
                ...chipSxForLevel(skill.level),
              }}
            />
          )
        })}
      </Stack>

      <Stack
        direction="row"
        sx={{
          mt: 4,
          gap: 2.5,
          flexWrap: 'wrap',
          color: 'text.tertiary',
          fontFamily: 'caption.fontFamily',
          fontSize: '0.75rem',
        }}
      >
        {LEVELS.map((level) => {
          const v = LEVEL_VISUAL[level]
          return (
            <Stack key={level} direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
              <Box
                aria-hidden
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  bgcolor: v.dotColor,
                  opacity: v.dotOpacity,
                }}
              />
              <span>{t(`skills.levels.${level}`)}</span>
            </Stack>
          )
        })}
      </Stack>
    </SectionContainer>
  )
}
