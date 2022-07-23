import Polaroid from './Polaroid'

export default function Pile({ data }) {
  return (
    <div className='Pile py-24 md:m-20 flex flex-col md:flex-row md:flex-wrap items-center justify-center overflow-x-hidden'>
      {data.map((text, i) => {
        return (
          <div className={`relative w-52 h-64 ${'alignSelf'}`} key={i}>
            <Polaroid text={text} index={i} />
          </div>
        )
      })}
    </div>
  )
}
