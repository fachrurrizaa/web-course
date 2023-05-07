import Brand from './Brand';
import Button from '../Button';
import Input from './input';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold text-5xl text-[#160442] mb-16 mt-28'>Welcome Back</h1>
            <Input type={"email"} label={"Email Address"} placeholder={"Type your email"}/>
            <Input type={"password"} label={"Password"} placeholder={"Type your password"}/>
            <div className='max-w-xs w-full'>
              <Button  className={'w-full text-white bg-[#642DFB] mt-8 font-semibold hover:bg-[#642dfbbe]'} content={"Sign In"}/>
              <Link href="/signup">
                <Button className={'w-full text-[#160442] bg-[#EBEDF3] mt-4 font-medium hover:bg-slate-300'} content={"Create New Account"}/>
              </Link>
            </div>
        </div>
        <Brand/>
    </div>
  )
}
