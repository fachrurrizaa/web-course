import ProductItem from './ProductItem';
import { Context } from '../../context/MyContext';
import { useContext } from 'react';

export default function ProductList() {
    const { products } = useContext(Context)
    
    return (
        <div className="flex justify-around">
        {products.map((product) => (
            <ProductItem key={product.id} id={product.id} thumbnails={product.thumbnails} name={product.name} subtitle={product.subtitle}/>
            ))
        }
        </div>
    )
}