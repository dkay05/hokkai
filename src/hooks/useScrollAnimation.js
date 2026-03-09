import { useEffect } from 'react'

export default function useScrollAnimation() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis')
        })
      },
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll('.fu')
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
