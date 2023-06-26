import Link from 'next/link';
import Button from '../Button';
import Input from './Input';

export default function SignUp() {
  return (
    <div className="flex flex-col w-80">
        <Input type={"text"} label={"Name"} placeholder={"Type your full name"}/>
        <Input type={"email"} label={"Email Address"} placeholder={"Type your email"}/>
        <Input type={"password"} label={"Password"} placeholder={"Type your password"}/>
        <Button className={"text-white mt-4 mb-4 bg-[#028d94] hover:bg-[#02b2bb]"} content={"Continue Sign Up"}/>
        <Link href="/login">
          <Button className={"text-[#004f4f] bg-[#EBEDF3] hover:bg-slate-300 w-full"} content={"Sign In"}/>
        </Link>
    </div>
  )
}
