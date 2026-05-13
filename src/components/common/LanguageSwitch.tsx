import TranslateIcon from '@mui/icons-material/TranslateOutlined'
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/i18n'

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const current = (i18n.resolvedLanguage ?? i18n.language).split('-')[0] as SupportedLanguage

  const handleSelect = (lng: SupportedLanguage) => {
    void i18n.changeLanguage(lng)
    setAnchorEl(null)
  }

  return (
    <>
      <Tooltip title={t('languageSwitch.label')}>
        <IconButton
          onClick={(e) => setAnchorEl(e.currentTarget)}
          aria-label={t('languageSwitch.label')}
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          size="medium"
          sx={{
            color: 'text.primary',
            transition: 'color 200ms',
            '&:hover': { color: 'primary.main' },
          }}
        >
          <TranslateIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{ list: { dense: true } }}
      >
        {SUPPORTED_LANGUAGES.map((lng) => (
          <MenuItem
            key={lng}
            selected={lng === current}
            onClick={() => handleSelect(lng)}
            sx={{ fontFamily: 'monospace', minWidth: 140 }}
          >
            {t(`languageSwitch.${lng}`)}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
