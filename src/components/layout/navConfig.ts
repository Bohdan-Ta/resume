export type NavItem = {
  id: string
  i18nKey: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', i18nKey: 'nav.about' },
  { id: 'skills', i18nKey: 'nav.skills' },
  { id: 'projects', i18nKey: 'nav.projects' },
  { id: 'experience', i18nKey: 'nav.experience' },
]

export const NAV_IDS = NAV_ITEMS.map((item) => item.id)
