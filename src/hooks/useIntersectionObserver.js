import { useRef, useEffect } from 'react'

export default function useIntersectionObserver(activeClass = 'visible', options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(activeClass)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [activeClass])

  return ref
}
