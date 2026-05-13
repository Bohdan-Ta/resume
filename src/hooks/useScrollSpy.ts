import { useEffect, useState } from 'react'

const DEFAULT_THRESHOLD = [0, 0.25, 0.5] as const

type Options = {
  ids: readonly string[]
  rootMargin?: string
  threshold?: number | readonly number[]
}

export const useScrollSpy = ({
  ids,
  rootMargin = '-40% 0px -55% 0px',
  threshold = DEFAULT_THRESHOLD,
}: Options) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const idsKey = ids.join(',')

  useEffect(() => {
    const elements = idsKey
      .split(',')
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
      { rootMargin, threshold: threshold as number | number[] },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [idsKey, rootMargin, threshold])

  return activeId
}
