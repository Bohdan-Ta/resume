import ContrastIcon from '@mui/icons-material/Contrast'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import { IconButton, Tooltip } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

type Mode = 'system' | 'light' | 'dark'

const iconFor: Record<Mode, typeof ContrastIcon> = {
  system: ContrastIcon,
  light: LightModeIcon,
  dark: DarkModeIcon,
}

const labelFor: Record<Mode, string> = {
  system: 'System theme (click for light)',
  light: 'Light theme (click for dark)',
  dark: 'Dark theme (click for system)',
}

const nextMode: Record<Mode, Mode> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
}

export const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme()
  if (!mode) return null

  const current = mode as Mode
  const Icon = iconFor[current]

  return (
    <Tooltip title={labelFor[current]}>
      <IconButton
        onClick={() => setMode(nextMode[current])}
        aria-label={labelFor[current]}
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
