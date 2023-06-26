import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import Input from './../form/Input';
import Button from './../Button';


export default function Contact() {
  return (
    <div className='flex h-[90vh] w-screen items-center justify-around'>
        <div className=''>
            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_lstnp9p3.json"
                style={{ height: '60vh', width: '30vw' }}
            >
            </Player>
        </div>
        <div className='mr-20 border-solid border-[#E6EAF2] border px-20 py-[2.5rem] rounded-3xl shadow-xl'>
            <h1 className='text-[2.5rem] text-[#004f4f] font-bold leading-[63px] text-center mb-10'>We’re Happy<br/> to Help You Today!</h1>
            <div className="flex flex-col w-full">
                <Input type={"text"} label={"Name"} placeholder={"Type your full name"}/>
                <Input type={"email"} label={"Email Address"} placeholder={"Type your email"}/>
                <label className="label">
                    <span className="label-text font-normal text-[#160442] text-base mb-2">Message</span>
                </label>
                <textarea placeholder="Type your message . . ." className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                <Button className={"text-white bg-[#028d94] hover:bg-[#02b2bb] mt-5"} content={"Send Message"}/>  
            </div>
        </div>
    </div>
    
  )
}
