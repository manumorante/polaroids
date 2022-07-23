import Img from './Img'
import Title from './Title'

export default function Polaroid({ text, index }) {
  const rotates = [
    'rotate-0',
    'rotate-1',
    'rotate-2',
    'rotate-3',
    'rotate-6',
    'rotate-12',
    'rotate-45',
    '-rotate-1',
    '-rotate-2',
    '-rotate-3',
    '-rotate-6',
    '-rotate-12',
    '-rotate-45',
  ]
  const radomRotate = rotates[Math.floor(Math.random() * rotates.length)]
  return (
    <div
      className={`Polaroid inline-block p-4 bg-white rounded-sm ${radomRotate}`}>
      <Img index={index} />
      <Title text={text} />
    </div>
  )
}
