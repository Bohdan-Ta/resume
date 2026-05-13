import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import { HEADER_HEIGHT } from '@/theme/layout'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      minHeight: '100dvh',
      bgcolor: 'background.default',
      color: 'text.primary',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Header />
    <Box
      component="main"
      id="top"
      sx={{ flex: 1, pt: { xs: `${HEADER_HEIGHT.xs}px`, md: `${HEADER_HEIGHT.md}px` } }}
    >
      {children}
    </Box>
    <Footer />
  </Box>
)
