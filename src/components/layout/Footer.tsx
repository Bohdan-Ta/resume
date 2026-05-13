import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { useContactDialog } from '@/components/contact/ContactDialogContext'
import { PAGE_GUTTER, PAGE_MAX_WIDTH } from '@/theme/layout'

const SOCIALS = [
  { href: 'mailto:btatarchuk@progeek.de', label: 'Email', icon: HiOutlineMail },
  {
    href: 'https://www.linkedin.com/in/bohdan-tatarchuk-4961907a/',
    label: 'LinkedIn',
    icon: FaLinkedinIn,
  },
  { href: 'https://github.com/Bohdan-Ta', label: 'GitHub', icon: FaGithub },
  { href: 'https://t.me/tbukraine', label: 'Telegram', icon: FaTelegramPlane },
]

export const Footer = () => {
  const { t } = useTranslation()
  const { openContact } = useContactDialog()
  const year = new Date().getFullYear()
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        py: { xs: 4, md: 6 },
        px: PAGE_GUTTER,
        mt: { xs: 8, md: 12 },
      }}
    >
      <Box sx={{ maxWidth: PAGE_MAX_WIDTH, mx: 'auto', width: '100%' }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 3 }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: 'text.disabled', display: 'block', letterSpacing: '0.12em' }}
            >
              {t('footer.eyebrow', { defaultValue: '// Get in touch' })}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 3 }}
              sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, mt: 0.5 }}
            >
              <Typography
                component="a"
                href="mailto:btatarchuk@progeek.de"
                sx={{
                  fontFamily: 'h1.fontFamily',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: 'text.primary',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                btatarchuk@progeek.de
              </Typography>
              <Button
                variant="outlined"
                endIcon={<ArrowForward />}
                onClick={openContact}
                sx={{
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {t('contact.openCta')}
              </Button>
            </Stack>
          </Box>

          <Stack direction="row" sx={{ gap: 0.5 }}>
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <IconButton
                key={label}
                component="a"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                size="medium"
                sx={{
                  color: 'text.secondary',
                  transition: 'color 200ms',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <Icon size={18} />
              </IconButton>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            justifyContent: 'space-between',
            gap: 1,
            fontFamily: 'overline.fontFamily',
            fontSize: '0.75rem',
            color: 'text.disabled',
          }}
        >
          <span>© {year} Bohdan Tatarchuk</span>
          <span>Built with React, MUI, Vite.</span>
        </Stack>
      </Box>
    </Box>
  )
}
