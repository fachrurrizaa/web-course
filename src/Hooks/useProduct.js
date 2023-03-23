import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        const { data } = await axios(`https://zullkit-backend.demo.belajarkoding.com/api/products`);
  
        setProducts(data.data.data);
      };
  
      getProducts().then(r => r);
    }, []);
  
    return products;
}
