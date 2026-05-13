export type TimelineEntryKind = 'work' | 'education' | 'milestone'

export type TimelineEntry = {
  id: string
  from: string
  to: string | 'present'
  kind: TimelineEntryKind
  i18nKey: string
  collapsed?: boolean
}

export const TIMELINE: TimelineEntry[] = [
  {
    id: 'dev-current',
    from: '2023',
    to: 'present',
    kind: 'work',
    i18nKey: 'timeline.entries.dev-current',
  },
  {
    id: 'goit',
    from: '2021',
    to: '2022',
    kind: 'education',
    i18nKey: 'timeline.entries.goit',
  },
  {
    id: 'business',
    from: '2016',
    to: '2022',
    kind: 'work',
    i18nKey: 'timeline.entries.business',
  },
  {
    id: 'public-service',
    from: '2004',
    to: '2016',
    kind: 'work',
    i18nKey: 'timeline.entries.public-service',
  },
  {
    id: 'university',
    from: '2000',
    to: '2006',
    kind: 'education',
    i18nKey: 'timeline.entries.university',
    collapsed: true,
  },
]
