import ProductItem from './ProductItem';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '@/components/context/MyContext';

export default function ProductList() {
    const {posts, setPosts} = useContext(Context)

    if (posts.length > 3){
        setPosts(posts.slice(-3))
    }

    return (
        <div className="flex justify-around">
        {posts.map((post) => (
            <ProductItem key={post._id} id={post._id} thumbnails={post.images[0]} title={post.title} description={post.description}/>
            ))
        }
        </div>
    )
}