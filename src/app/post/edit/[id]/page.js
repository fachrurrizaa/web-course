'use client'
import { useState, useEffect } from 'react'
import Layout from '/src/components/admin/Layout';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import PostForm from '@/components/admin/PostForm';

export default function EditPostPage({ params }) {
  const [postInfo, setPostInfo] = useState(null);
  const router = useRouter();
  const id = params.id;
  useEffect(() => {
    if (!id){
      return;
    }
    axios.get('/api/post?id='+id).then(response => {
      setPostInfo(response.data)
    })
  }, [id])
  return (
    <Layout>
        <h1 className="text-xl ml-1">Edit Post</h1>
        {postInfo && (
          <PostForm {...postInfo}/>
        )}
    </Layout>
  )
}
