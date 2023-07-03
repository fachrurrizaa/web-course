'use client'
import Link from 'next/link';
import React from 'react'
import Layout from '/src/components/admin/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function page() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('/api/post').then(response => {
            setPost(response.data)
        })
    }, [])
    return (
        <Layout>
            <Link className='bg-blue-900 text-white rounded-md py-1 px-2' href={'/post/new'}>Add new post</Link>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map(pos => (
                        <tr className="hover" key={pos._id}>
                            <td>{pos.title}</td>
                            <td>
                                <Link href={'/post/'+pos._id}>
                                    Edit
                                </Link>
                            </td>
                        </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
