'use client'
import Button from '@/components/Button';
import Input from '@/components/front/form/Input';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function PostForm({
    _id,
    title:existingTitle, 
    description:existingDescription, 
    price:existingPrice
}) {
    
  const router = useRouter();
  const [title, setTitle] = useState(existingTitle || '');
  const [description, setDescription] = useState(existingDescription || '');
  const [price, setPrice] = useState(existingPrice || '');
  const [goToPost, setGoToPost] = useState(false);

  async function savePost(e){
    e.preventDefault();
    const data = {title, description, price};
    if(_id){
        await axios.put('/api/post', {...data, _id})
    }else{
        await axios.post('/api/post', data)
    }
    setGoToPost(true)
  }

  if (goToPost){
    return router.push('/post')
  }
  return (
    <form onSubmit={savePost}>
      <Input 
        label={"Title Post"} 
        className={"rounded-lg"} 
        placeholder={"Title Post"} 
        value={title} 
        onChange={e => setTitle(e.target.value)}
      />
      <label className="label">
        <span className="label-text font-normal text-[#160442] text-base mb-2">Description</span>
      </label>
      <textarea 
        placeholder="Description" 
        className="textarea textarea-bordered textarea-lg w-full"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Input 
        label={"Price"} 
        className={"rounded-lg"} 
        placeholder={"Price"}
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <Button type={"submit"} className={"rounded-lg bg-blue-900"} content={"Publish"}/>
    </form>
  )
}
