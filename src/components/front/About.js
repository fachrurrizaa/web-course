import Image from "next/image"
import Button from "../Button"
import Link from "next/link"

export default function About() {
  return (
    <div className="hero min-h-screen">
  <div className="hero-overlay bg-opacity-60 "></div> 
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 px text-5xl font-bold">Hallo Semuanya!!</h1>
      <p className="mb-5 px text-2xl cursor-pointer text-justify align-text-top" >
        Website ini dibuat untuk menyelesaikan FinalProject Pemrograman Web yang diampu oleh dosen kami, bapak Mujiyanto, M.Kom. 
        <br/><br/> 
      Website Rizaa ini menyediakan berbagai pilihan design UI/UX dari berbagai designer yang telah berpengalaman 
      serta sistem belajar yang bisa menyesuaikan member, karena bentuk materi yang berupa video yang telah di upload oleh para tutor 
      sehingga bisa dipelajari berulang kali, kapan saja, dan dimana saja oleh peserta course.
      <br/><br/>
      Selanjutnya kita akan kenalan lebih dulu mengenai latar belakang web design ini di next page
      </p>
      <Link href="/VisiMisi"><button  className=" my-24 bg-[#028d94] hover:bg-[#02b2bb] btn btn-primary ">Profil</button></Link>
      
    </div>
  </div>
</div>
  )
}
