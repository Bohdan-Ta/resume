import { Box, Typography } from '@mui/material'

type Props = {
  index: number
  label: string
}

export const SectionEyebrow = ({ index, label }: Props) => (
  <Box
    sx={{
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 1,
      mb: 2,
      color: 'text.tertiary',
      fontFamily: 'overline.fontFamily',
      letterSpacing: '0.12em',
    }}
  >
    <Typography
      component="span"
      sx={{
        fontFamily: 'inherit',
        fontSize: '0.75rem',
        color: 'primary.main',
      }}
    >
      {`// 0${index}`}
    </Typography>
    <Typography
      component="span"
      sx={{
        fontFamily: 'inherit',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        color: 'inherit',
      }}
    >
      {label}
    </Typography>
  </Box>
)
