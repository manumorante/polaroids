import cx from 'classnames'
import Img from './Img'
import Title from './Title'

export default function Polaroid({ text, index }) {
  const rotates = [
    'rotate-0',
    'rotate-1',
    'rotate-2',
    'rotate-3',
    'rotate-5',
    'rotate-10',
    'rotate-15',
    'rotate-20',
    'rotate-25',
    'rotate-30',
    '-rotate-1',
    '-rotate-2',
    '-rotate-3',
    '-rotate-5',
    '-rotate-10',
    '-rotate-15',
    '-rotate-20',
    '-rotate-25',
    '-rotate-30',
  ]
  const radomRotate = rotates[Math.floor(Math.random() * rotates.length)]
  const zIndex = 1000 - index
  const par = index % 2 === 0

  return (
    <div
      className={cx(
        'Polaroid',
        'absolute top-1/2 left-1/2 -translate-y-1/2',
        {
          '-translate-x-1/4': par,
          '-translate-x-3/4': !par,
        },
        'md:-translate-x-1/2',
        'w-64 h-80 inline-block p-4',
        radomRotate,
        'bg-white dark:bg-stone-900 rounded-sm shadow-md',
        'hover:!z-[1002] hover:shadow-2xl hover:scale-125 touch-manipulation:scale-125 hover:rotate-0 transition-all duration-500'
      )}
      style={{ zIndex: zIndex }}>
      <Img index={index} />
      <Title className='' text={text} />
    </div>
  )
}
