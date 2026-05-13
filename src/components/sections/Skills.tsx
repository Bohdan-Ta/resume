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

const levelStyle = (level: SkillLevel) => {
  switch (level) {
    case 'daily':
      return {
        borderColor: 'primary.main',
        color: 'text.primary',
        '& .level-dot': { bgcolor: 'primary.main', opacity: 1 },
      }
    case 'strong':
      return {
        borderColor: 'divider',
        color: 'text.primary',
        '& .level-dot': { bgcolor: 'primary.main', opacity: 0.6 },
      }
    case 'working':
      return {
        borderColor: 'divider',
        color: 'text.secondary',
        '& .level-dot': { bgcolor: 'text.disabled', opacity: 0.8 },
      }
    case 'learning':
      return {
        borderColor: 'divider',
        color: 'text.disabled',
        borderStyle: 'dashed',
        '& .level-dot': { bgcolor: 'text.disabled', opacity: 0.4 },
      }
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
            color: 'text.disabled',
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
                ...levelStyle(skill.level),
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
          color: 'text.disabled',
          fontFamily: 'caption.fontFamily',
          fontSize: '0.75rem',
        }}
      >
        {(['daily', 'strong', 'working', 'learning'] as SkillLevel[]).map((level) => (
          <Stack key={level} direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
            <Box
              sx={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                bgcolor: level === 'daily' || level === 'strong' ? 'primary.main' : 'text.disabled',
                opacity:
                  level === 'daily'
                    ? 1
                    : level === 'strong'
                      ? 0.6
                      : level === 'working'
                        ? 0.8
                        : 0.4,
              }}
            />
            <span>{t(`skills.levels.${level}`)}</span>
          </Stack>
        ))}
      </Stack>
    </SectionContainer>
  )
}
