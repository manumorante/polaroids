export default function Img({ index }) {
  return (
    <img
      className='Img w-full h-auto aspect-square object-cover rounded-sm contrast-50 saturate-150'
      src={`https://picsum.photos/300?random=${index}`}
    />
  )
}
