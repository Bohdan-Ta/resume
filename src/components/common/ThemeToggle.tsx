import ContrastIcon from '@mui/icons-material/Contrast'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import { IconButton, Tooltip } from '@mui/material'
import type { ThemeMode } from '@/theme/ThemeModeContext'
import { useThemeMode } from '@/theme/ThemeModeContext'

const iconFor: Record<ThemeMode, typeof ContrastIcon> = {
  system: ContrastIcon,
  light: LightModeIcon,
  dark: DarkModeIcon,
}

const labelFor: Record<ThemeMode, string> = {
  system: 'System theme (click for light)',
  light: 'Light theme (click for dark)',
  dark: 'Dark theme (click for system)',
}

export const ThemeToggle = () => {
  const { mode, cycleMode } = useThemeMode()
  const Icon = iconFor[mode]

  return (
    <Tooltip title={labelFor[mode]}>
      <IconButton
        onClick={cycleMode}
        aria-label={labelFor[mode]}
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
