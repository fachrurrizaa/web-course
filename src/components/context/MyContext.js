import axios from "axios";
import { createContext, useEffect, useState } from "react";
import ProductPage from "../product-page/ProductPage";
import CategoryList from "../section/CategoryList";
import ProductList from "../section/ProductList";

const Context = createContext(null)

const Provider = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
          const { data } = await axios(`https://zullkit-backend.demo.belajarkoding.com/api/categories`)

          setCategories(data.data.data)
        }
  
        getCategories().then(r => r)
  
    }, [])

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        const { data } = await axios(`https://zullkit-backend.demo.belajarkoding.com/api/products`);
  
        setProducts(data.data.data);
      };
  
      getProducts().then(r => r);
    }, []);

    return (
        <Context.Provider value={{products, categories}}>
            <CategoryList/>
            <ProductList/>
            <ProductPage/>
        </Context.Provider>
    )
}

export default {Context, Provider}