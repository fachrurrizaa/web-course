'use client'
import Navbar from "@/components/navbar-type/Navbar"
import ProductPage from "@/components/product-page/ProductPage"
import useProducts from "@/Hooks/useProduct"

export default function Product({params}) {
    const id = params.id - 1
    const products = useProducts()
    const product = products[id]
    console.log(product.name)
    return (
        <>
            <Navbar/>
        </>
    )
}
