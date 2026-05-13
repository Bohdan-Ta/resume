import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export type SocialLink = {
  id: string
  href: string
  label: string
  icon: IconType
}

export const profile = {
  name: 'Bohdan Tatarchuk',
  initials: 'BT',
  email: 'btatarchuk@progeek.de',
  cvHref: '/cv-bohdan-tatarchuk.pdf',
} as const

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'email', href: 'mailto:btatarchuk@progeek.de', label: 'Email', icon: HiOutlineMail },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/bohdan-tatarchuk-4961907a/',
    label: 'LinkedIn',
    icon: FaLinkedinIn,
  },
  { id: 'github', href: 'https://github.com/Bohdan-Ta', label: 'GitHub', icon: FaGithub },
  { id: 'telegram', href: 'https://t.me/tbukraine', label: 'Telegram', icon: FaTelegramPlane },
]
