import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import { PAGE_GUTTER, PAGE_MAX_WIDTH, SCROLL_MARGIN_TOP } from '@/theme/layout'

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
        scrollMarginTop: { xs: `${SCROLL_MARGIN_TOP.xs}px`, md: `${SCROLL_MARGIN_TOP.md}px` },
        py: { xs: 8, md: 16 },
        px: PAGE_GUTTER,
        maxWidth: PAGE_MAX_WIDTH,
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
