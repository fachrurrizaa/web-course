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
                                <Link href={'/post/edit/'+pos._id}>
                                    Edit
                                </Link>
                            </td>
                            <td>
                                {/* The button to open modal */}
                                <label htmlFor="my_modal_6" className="btn">Delete</label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                <div className="modal">
                                <div className="modal-box flex flex-col justify-center items-center">
                                    <h3 className="font-bold text-lg">Do you really want to delete {post.title}?</h3>
                                    <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn">Yes</label>
                                    <label htmlFor="my_modal_6" className="btn">No</label>
                                    </div>
                                </div>
                                </div>
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
