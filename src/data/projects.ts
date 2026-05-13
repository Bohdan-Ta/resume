import filmotekaImg from '@/assets/projects/filmoteka.jpg'
import getconnectedImg from '@/assets/projects/getconnected.png'
import hellenEnglishImg from '@/assets/projects/hellen-english.jpg'
import phonebookImg from '@/assets/projects/phonebook.jpg'
import walletImg from '@/assets/projects/wallet.jpg'
import wirGehenLosImg from '@/assets/projects/wir-gehen-los.webp'

export type ProjectRole = 'solo' | 'team' | 'lead' | 'fullstack'

export type Project = {
  id: string
  image?: string
  role: ProjectRole
  year: string
  i18nKey: string
  tech: string[]
  links: {
    github?: string
    live?: string
  }
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'wir-gehen-los',
    image: wirGehenLosImg,
    role: 'fullstack',
    year: '2025',
    i18nKey: 'projects.items.wir-gehen-los',
    tech: ['Kotlin', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'Docker'],
    links: {
      github:
        'https://gitlab.opencode.de/sh/digitalhub-sh/landesprogramm-offene-innovationen/mrija-manager',
      live: 'https://wirgehenlos.de',
    },
    featured: true,
  },
  {
    id: 'getconnected',
    image: getconnectedImg,
    role: 'fullstack',
    year: '2025',
    i18nKey: 'projects.items.getconnected',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    links: {
      live: 'https://www.getconnected.digital',
    },
    featured: true,
  },
  {
    id: 'wallet',
    image: walletImg,
    role: 'team',
    year: '2022',
    i18nKey: 'projects.items.wallet',
    tech: ['React', 'Node.js', 'Redux', 'REST API', 'Heroku'],
    links: {
      github: 'https://github.com/VladVinichenko/Wallet',
    },
  },
  {
    id: 'phonebook',
    image: phonebookImg,
    role: 'solo',
    year: '2022',
    i18nKey: 'projects.items.phonebook',
    tech: ['React', 'Redux Toolkit', 'Formik', 'Netlify'],
    links: {
      github: 'https://github.com/Bohdan-Ta/goit-react-hw-08-phonebook',
      live: 'https://phonebook-tb.netlify.app',
    },
  },
  {
    id: 'filmoteka',
    image: filmotekaImg,
    role: 'team',
    year: '2022',
    i18nKey: 'projects.items.filmoteka',
    tech: ['JavaScript', 'Sass', 'Axios', 'TMDB API'],
    links: {
      github: 'https://github.com/A-V-Kuzmich/filmoteka',
      live: 'https://a-v-kuzmich.github.io/filmoteka/',
    },
  },
  {
    id: 'hellen-english',
    image: hellenEnglishImg,
    role: 'team',
    year: '2022',
    i18nKey: 'projects.items.hellen-english',
    tech: ['HTML', 'SCSS', 'JavaScript'],
    links: {
      github: 'https://github.com/Viktor-Kostiuchenko/hellen-english',
      live: 'https://viktor-kostiuchenko.github.io/hellen-english/',
    },
  },
]
