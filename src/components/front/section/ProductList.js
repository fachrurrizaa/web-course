import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductList() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('/api/post').then(response => {
            setPosts(response.data)
        })
    })
    
    return (
        <div className="flex justify-around">
        {posts.map((post) => (
            <ProductItem key={post._id} id={post._id} thumbnails={post.images[0]} title={post.title} description={post.description}/>
            ))
        }
        </div>
    )
}