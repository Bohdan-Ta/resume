import { useEffect, useState } from 'react'

type Options = {
  ids: string[]
  rootMargin?: string
  threshold?: number
}

export const useScrollSpy = ({ ids, rootMargin = '-40% 0px -55% 0px', threshold = 0 }: Options) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting)
        if (intersecting.length === 0) return
        const closest = intersecting.reduce((prev, cur) =>
          cur.intersectionRatio > prev.intersectionRatio ? cur : prev,
        )
        setActiveId(closest.target.id)
      },
      { rootMargin, threshold },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [ids, rootMargin, threshold])

  return activeId
}
