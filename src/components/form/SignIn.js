import Brand from './Brand';
import Button from './Button';
import Input from './input';

export default function SignIn() {
  return (
    <div>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold text-5xl text-[#160442] mb-16 mt-28'>Welcome Back</h1>
            <Input type={"email"} label={"Email Address"} placeholder={"Type your email"}/>
            <Input type={"password"} label={"Password"} placeholder={"Type your password"}/>
            <Button  className={'btn max-w-xs w-full text-white bg-[#642DFB] mt-8 font-semibold outline-none border-none hover:bg-[#642dfbbe] rounded-full'} content={"Sign In"}/>
            <Button className={'btn max-w-xs w-full text-[#160442] bg-[#EBEDF3] mt-4 font-medium outline-none border-none hover:bg-slate-300 rounded-full'} content={"Create New Account"}/>
        </div>
        <Brand/>
    </div>
  )
}
