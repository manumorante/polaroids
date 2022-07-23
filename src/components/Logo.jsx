export default function Logo() {
  // Hacer que cuando se pulse el logo, se vaya el scroll a la parte superior de la página.
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className='Logo fixed top-0 left-9 w-20 z-[1001] shadow-sm'
      onClick={handleClick}>
      <div className='flex h-12'>
        <div className='bg-[#FC000A] grow'></div>
        <div className='bg-[#FC6409] grow'></div>
        <div className='bg-[#FDA308] grow'></div>
        <div className='bg-[#4FBB06] grow'></div>
        <div className='bg-[#0E77D9] grow'></div>
      </div>
      <div className='bg-white w-full py-3 text-center font-bold text-sm text-black'>
        Polaroid
      </div>
    </div>
  )
}
