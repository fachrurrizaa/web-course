import Brand from './Brand';
import Button from '../Button';
import Input from './input';
import Link from 'next/link';

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
              <Link href="/signup">
                <Button className={'w-full text-[#004f4f] bg-[#EBEDF3] mt-4 font-medium hover:bg-slate-300'} content={"Create New Account"}/>
              </Link>
            </div>
        </div>
        <Brand/>
    </div>
  )
}
