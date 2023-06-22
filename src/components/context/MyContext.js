import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Context = createContext(null)

const Provider = ({children}) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
          const { data } = await axios(`https://zullkit-backend.belajarkoding.com/api/categories`)

          setCategories(data.data.data)
        }
  
        getCategories().then(r => r)
  
    }, [])

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        const { data } = await axios(`https://zullkit-backend.belajarkoding.com/api/products`);
  
        setProducts(data.data.data);
      };
  
      getProducts().then(r => r);
    }, []);

    return (
        <Context.Provider value={{products, categories}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}