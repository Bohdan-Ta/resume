import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'
import type { ReactNode } from 'react'

type Props = Omit<BoxProps, 'component'> & {
  id: string
  children: ReactNode
}

export const SectionContainer = ({ id, children, sx, ...rest }: Props) => (
  <Box
    component="section"
    id={id}
    sx={[
      {
        scrollMarginTop: 80,
        py: { xs: 8, md: 16 },
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        maxWidth: 1280,
        mx: 'auto',
        width: '100%',
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </Box>
)
