import { useContext } from 'react';
import { Context } from '@/components/context/MyContext';

export default function ProductImage() {
  const { products } = useContext(Context)
  
  return (
    <div>
        <div className="carousel w-full rounded-xl max-w-screen-md h-[550px]">{
          products.map(product => product.galleries.map((gallery) => (
            <div id={ gallery.id } className="carousel-item w-full">
                <img src={ gallery.url } className="w-full" />
            </div> 
          )))
        }</div> 
        <div className="flex justify-center w-full py-2 gap-2">{
          products.map(product => product.galleries.map((gallery) => (
            <a href={`#${gallery.id}`} className="btn btn-xs">{ gallery.id }</a> 
          )))
        }</div>
    </div>
  )
}
