import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-5">
        <h1 className="cursor-pointer text-4xl font-bold text-[#160442]">Rizaa</h1>
        <nav>
            <ul className="flex justify-between">
                <li className="font-medium text-base text-[#160442] inline-block py-0 px-5 transition-all ease-in-out cursor-pointer hover:font-bold"><Link href="/">Home</Link></li>
                <li className="font-medium text-base text-[#160442] inline-block py-0 px-5 transition-all ease-in-out cursor-pointer hover:font-bold">Categories</li>
                <li className="font-medium text-base text-[#160442] inline-block py-0 px-5 transition-all ease-in-out cursor-pointer hover:font-bold">Pricing</li>
                <li className="font-medium text-base text-[#160442] inline-block py-0 px-5 transition-all ease-in-out cursor-pointer hover:font-bold">Study Case</li>
            </ul>
        </nav>
        <div>
            <Link href="" className="font-medium text-base"><button className="font-medium text-base text-[#160442] bg-slate-200 py-2 px-6 rounded-full cursor-pointer transition-all ease-in-out hover:bg-slate-300 mr-2">Sign in</button></Link>
            <Link href="" className="font-medium text-base"><button className="font-medium text-base text-white bg-[#160442] py-2 px-6 rounded-full cursor-pointer transition-all ease-in-out hover:bg-[#160442d8]">Sign Up</button></Link>
        </div>
    </header>
  )
}
