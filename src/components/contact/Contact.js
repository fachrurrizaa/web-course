import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function Contact() {
  return (
    <div className='h-[90vh] w-screen flex items-center justify-around'>
        <div>
            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_lstnp9p3.json"
                style={{ height: '60vh', width: '50vw' }}
            >
            </Player>
        </div>
        <div>
            <h1 className='text-5xl text-[#160442] font-bold leading-[63px] text-center mb-16'>We’re Happy to Help You Today!</h1>
        </div>
    </div>
    
  )
}
