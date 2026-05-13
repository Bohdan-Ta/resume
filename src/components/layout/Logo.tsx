import { Box } from '@mui/material'
import { alpha } from '@mui/material/styles'

type Props = {
  onClick?: () => void
}

export const Logo = ({ onClick }: Props) => {
  return (
    <Box
      component="a"
      href="#top"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        onClick?.()
      }}
      aria-label="Bohdan Tatarchuk — back to top"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        textDecoration: 'none',
        color: 'text.primary',
        fontFamily: 'h1.fontFamily',
        fontWeight: 300,
        fontSize: { xs: '1.5rem', md: '1.75rem' },
        letterSpacing: '-0.04em',
        lineHeight: 1,
        transition: 'color 200ms',
        '&:hover, &:focus-visible': { color: 'primary.main' },
        '&:focus-visible': {
          outline: 'none',
          boxShadow: (theme) => `0 0 0 3px ${alpha(theme.palette.primary.main, 0.25)}`,
          borderRadius: 1,
        },
      }}
    >
      <span>BT</span>
      <Box
        component="span"
        sx={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          ml: 0.25,
          alignSelf: 'flex-end',
          mb: '0.35em',
        }}
      />
    </Box>
  )
}
