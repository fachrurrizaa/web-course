'use client'
import Layout from '/src/components/admin/Layout';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function page({ params }) {
  const router = useRouter();

  const [postInfo, setPostInfo] = useState(null);
  const id = params.id;
  useEffect(() => {
    if (!id){
      return;
    }
    axios.get('/api/post?id='+id).then(response => {
      setPostInfo(response.data)
    })
  }, [id])

  const goBack = () => {
    router.push(`/post`)
  }

  function deletePost(){
    axios.delete('/api/post?id='+id);
    goBack();
  }

  return (
    <Layout>
      <h1 className='text-center'>
        Do you really want to delete &nbsp;"{postInfo?.title}"?
      </h1>
      <div className='flex gap-2 justify-center'>
        <Button className={"bg-red-800 px-4 rounded-md"} click={deletePost} content={"Yes"}/>
        <Button className={"bg-gray-400 text-white px-4 rounded-md"} click={goBack} content={"No"}/>
      </div>
    </Layout>
  )
}
