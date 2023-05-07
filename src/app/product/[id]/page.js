'use client'
import Navbar from "@/components/navbar/Navbar"
import ProductPage from "@/components/product-page/ProductPage"
import { Context } from "@/components/context/MyContext"
import { useContext } from "react"

export default function Product({ params }) {
    const id = params.id - 1
    const { products } = useContext(Context)
    
    if (products[id] == null){
        return <h1>Loading . . .</h1>
    }else{
        return (
            <>
                <Navbar/>
                <ProductPage name={ products[id].name } subtitle={ products[id].subtitle } features={ products[id].features } />
            </>
        )
    }
}
