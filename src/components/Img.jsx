export default function Img({ index }) {
  return (
    <img
      className='Img w-full h-auto aspect-square object-cover rounded-sm'
      src={`https://picsum.photos/300?random=${index}`}
    />
  )
}
