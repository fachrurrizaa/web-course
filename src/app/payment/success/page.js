'use client'
import { Player } from '@lottiefiles/react-lottie-player';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Context } from '@/components/context/MyContext';

export default function Success() {
    const router = useRouter();
    const {setIsSubscribe} = useContext(Context)

    useEffect(()=>{
        setIsSubscribe(true)
        setTimeout(()=>{
            router.push('/')
        },5000)
    },[])

    return (
       <div className='flex justify-center items-center flex-col h-screen'>
            <Player
                autoplay
                loop
                src="https://lottie.host/5e02ef50-f846-4ada-a36e-a648a1adb0ec/I7XEThXZlW.json"
                style={{ height: '80vh', width: '80vw'}}
                className='mt-96'
            >
            </Player>
       </div>
  )
}
