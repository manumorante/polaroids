import Polaroid from './Polaroid'

export default function Pile({ data }) {
  return (
    <div className='Pile max-w-5xl mx-auto grid grid-cols-4 grid-rows-4'>
      {data.map((text, i) => (
        <div className='Pile__item relative w-64 h-80 bg-white/20' key={i}>
          <Polaroid text={text} index={i} />
        </div>
      ))}
    </div>
  )
}
