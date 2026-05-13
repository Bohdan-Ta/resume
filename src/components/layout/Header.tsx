import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrolled } from '@/hooks/useScrolled'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { HEADER_HEIGHT, PAGE_GUTTER, PAGE_MAX_WIDTH } from '@/theme/layout'
import { LanguageSwitch } from '../common/LanguageSwitch'
import { ThemeToggle } from '../common/ThemeToggle'
import { Logo } from './Logo'
import { NAV_IDS, NAV_ITEMS } from './navConfig'

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const NavLink = ({
  active,
  index,
  label,
  onClick,
}: {
  active: boolean
  index: number
  label: string
  onClick: () => void
}) => (
  <Box
    component="a"
    href={`#${NAV_ITEMS[index]?.id ?? ''}`}
    onClick={(e: React.MouseEvent) => {
      e.preventDefault()
      onClick()
    }}
    sx={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 0.75,
      px: 1.5,
      py: 0.5,
      textDecoration: 'none',
      color: active ? 'text.primary' : 'text.secondary',
      fontFamily: 'overline.fontFamily',
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      transition: 'color 200ms',
      '&::before': {
        content: `"0${index + 1}"`,
        color: active ? 'primary.main' : 'text.tertiary',
        fontSize: '0.625rem',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        left: '20%',
        right: '20%',
        bottom: -2,
        height: 2,
        bgcolor: 'primary.main',
        transform: active ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'transform 240ms ease-out',
      },
      '&:hover': { color: 'text.primary' },
      '&:hover::after': { transform: 'scaleX(0.6)' },
      '&:focus-visible': {
        outline: 'none',
        color: 'text.primary',
        boxShadow: (theme) => `0 0 0 3px ${theme.palette.primary.main}40`,
        borderRadius: 1,
      },
    }}
  >
    {label}
  </Box>
)

export const Header = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const scrolled = useScrolled(8)
  const activeId = useScrollSpy({ ids: NAV_IDS })
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleNav = (id: string) => {
    setDrawerOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'background.default' : 'transparent',
          backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'divider' : 'transparent',
          color: 'text.primary',
          transition: 'background-color 240ms, border-color 240ms, backdrop-filter 240ms',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            maxWidth: PAGE_MAX_WIDTH,
            mx: 'auto',
            width: '100%',
            px: PAGE_GUTTER,
            minHeight: { xs: HEADER_HEIGHT.xs, md: HEADER_HEIGHT.md },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Logo onClick={() => setDrawerOpen(false)} />

          {isDesktop && (
            <Stack
              direction="row"
              component="nav"
              aria-label={t('nav.ariaPrimary')}
              sx={{ gap: 0.5 }}
            >
              {NAV_ITEMS.map((item, idx) => (
                <NavLink
                  key={item.id}
                  active={activeId === item.id}
                  index={idx}
                  label={t(item.i18nKey)}
                  onClick={() => handleNav(item.id)}
                />
              ))}
            </Stack>
          )}

          <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center' }}>
            <LanguageSwitch />
            <ThemeToggle />
            {!isDesktop && (
              <IconButton
                aria-label={t('nav.openMenu')}
                onClick={() => setDrawerOpen(true)}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen && !isDesktop}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              bgcolor: 'background.default',
              backgroundImage: 'none',
              p: 3,
            },
          },
        }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}
        >
          <Logo onClick={() => setDrawerOpen(false)} />
          <IconButton
            aria-label={t('nav.closeMenu')}
            onClick={() => setDrawerOpen(false)}
            sx={{ color: 'text.primary' }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider />
        <List component="nav" aria-label={t('nav.ariaMobile')} sx={{ mt: 2 }}>
          {NAV_ITEMS.map((item, idx) => {
            const active = activeId === item.id
            return (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => handleNav(item.id)}
                  sx={{
                    py: 1.5,
                    gap: 1.5,
                    color: active ? 'text.primary' : 'text.secondary',
                    '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontFamily: 'overline.fontFamily',
                      fontSize: '0.75rem',
                      color: active ? 'primary.main' : 'text.tertiary',
                      minWidth: 24,
                    }}
                  >
                    {`0${idx + 1}`}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontFamily: 'overline.fontFamily',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '0.875rem',
                    }}
                  >
                    {t(item.i18nKey)}
                  </Box>
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
    </>
  )
}
