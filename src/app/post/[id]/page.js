'use client'
import React from 'react'
import Layout from '/src/components/admin/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

export default function EditPostPage() {
  const router = useRouter();
  const {id} = router.query;
  useEffect(() => {
    if (!id){
      return
    }
    axios.get('/api/post?id='+id).then(response => {
      console.log()
    })
  }, [id])
  return (
    <Layout>
        edit post form here
    </Layout>
  )
}
