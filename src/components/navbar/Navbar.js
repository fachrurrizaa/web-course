import Link from "next/link";
import Button from './../Button';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-5 px-32">
        <h1 className="cursor-pointer text-4xl font-bold text-[#004f4f]">Rizaa</h1>
        <nav>
            <ul className="flex justify-between">
                <li className="font-medium text-base text-[#004f4f] inline-block py-0 px-5 transition-all ease-in-out cursor-pointer hover:font-bold"><Link href="/">Home</Link></li>
                <li className="font-medium text-base text-[#004f4f] inline-block py-0 px-5 transition-all ease-in-out cursor-pointer hover:font-bold">Categories</li>
                <li className="font-medium text-base text-[#004f4f] inline-block py-0 px-5 transition-all ease-in-out cursor-pointer hover:font-bold"><Link href="/pricing">Pricing</Link></li>
                <li className="font-medium text-base text-[#004f4f] inline-block py-0 px-5 transition-all ease-in-out cursor-pointer hover:font-bold">Study Case</li>
            </ul>
        </nav>
        <div>
            <Link href="/login" className="font-medium text-base">
              <Button className={"font-medium text-base text-[#004f4f] bg-slate-200 h-10 min-h-0 px-6 hover:bg-slate-300 mr-2"} content={"Sign in"}/>
            </Link>
            <Link href="/signup" className="font-medium text-base">
              <Button className={"font-medium text-base text-white h-10 min-h-0 px-6 bg-[#028d94] hover:bg-[#02b2bb]"} content={"Sign Up"}/>
            </Link>
        </div>
    </header>
  )
}
