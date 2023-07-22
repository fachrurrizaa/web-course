import Slider from './Slider';

export default function ProductImage({ images }) {
  return (
    <div className='max-w-3xl h-[520px]'>
      <Slider images={images}/>
    </div>
  )
}
