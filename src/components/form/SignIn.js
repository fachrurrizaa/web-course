'use client'
import Brand from './Brand';
import Button from '../Button';
import Input from './input';
import Image from 'next/image';
import googleIcon from '/public/assets/googleIcon.svg'
import { signIn } from "next-auth/react"

export default function SignIn() {
  return (
    <div>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold text-5xl text-[#004f4f] mb-16 mt-28'>Welcome Back</h1>
            <div className='w-80'>
              <Input type={"email"} label={"Email Address"} placeholder={"Type your email"}/>
              <Input type={"password"} label={"Password"} placeholder={"Type your password"}/>
            </div>
            <div className='max-w-xs w-full'>
              <Button  className={'w-full text-white bg-[#028d94] hover:bg-[#02b2bb] mt-8 font-semibold'} content={"Sign In"}/>
              <Button click={()=>signIn('google')} className={'w-full text-[#004f4f] bg-[#EBEDF3] mt-4 font-medium hover:bg-slate-300'} content={
                <div className='flex items-center w-full'>
                  <Image src={googleIcon} width={0} height={30} alt={"img"} className='mr-10'/>
                  <p className='text-[#4484f5]'>Sign in with Google</p>
                </div>
              }/>
            </div>
        </div>
        <Brand/>
    </div>
  )
}
