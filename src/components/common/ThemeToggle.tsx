import ContrastIcon from '@mui/icons-material/Contrast'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import { IconButton, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import type { ThemeMode } from '@/theme/ThemeModeContext'
import { useThemeMode } from '@/theme/ThemeModeContext'

const iconFor: Record<ThemeMode, typeof ContrastIcon> = {
  system: ContrastIcon,
  light: LightModeIcon,
  dark: DarkModeIcon,
}

export const ThemeToggle = () => {
  const { mode, cycleMode } = useThemeMode()
  const { t } = useTranslation()
  const Icon = iconFor[mode]
  const label = t(`themeToggle.${mode}`)

  return (
    <Tooltip title={label}>
      <IconButton
        onClick={cycleMode}
        aria-label={label}
        size="medium"
        sx={{
          color: 'text.primary',
          transition: 'color 200ms',
          '&:hover': { color: 'primary.main' },
        }}
      >
        <Icon fontSize="small" />
      </IconButton>
    </Tooltip>
  )
}
