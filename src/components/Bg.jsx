import { useEffect, useState } from 'react'
export default function Bg() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.body.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const scrollPercent = scrollTop / (scrollHeight - clientHeight)
      setScrollPercent(scrollPercent)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const styles = {
    opacity: scrollPercent,
  }

  return (
    <div className='Bg z-0 bg-[#FC000A] fixed inset-0' style={styles}></div>
  )
}
