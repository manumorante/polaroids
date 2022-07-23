import Polaroid from './Polaroid'

export default function Pile({ data }) {
  return (
    <div className='Pile md:m-20 flex flex-col md:flex-row md:flex-wrap items-center justify-center'>
      {data.map((text, i) => (
        <div className='relative w-52 h-64' key={i}>
          <Polaroid text={text} index={i} />
        </div>
      ))}
    </div>
  )
}
