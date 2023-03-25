'use client'
import useProducts from "@/Hooks/useProduct"
import ProductItem from './ProductItem';

export default function ProductList() {
    const products = useProducts()
    // const onClickHandler = (id) => {
    //     router.push(`/productItem/${id}`)
    // }
    
    return (
        <div className="flex justify-around">
        {products.map((product) => (
            <ProductItem key={product.id} id={product.id} thumbnails={product.thumbnails} name={product.name} subtitle={product.subtitle}/>
            ))
        }
        </div>
    )
}