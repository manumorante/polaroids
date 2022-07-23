export default function Logo() {
  return (
    <div className='Logo fixed top-0 left-9 w-20 z-[1001] shadow-sm'>
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
