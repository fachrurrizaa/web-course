import Image from "next/image"

export default function About() {
  return (
    <div className="hero min-h-screen" >
  <div className="hero-overlay bg-opacity-60 "></div>
  <img src="../../public/assets/ygy.png" alt="Background"/>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 px text-5xl font-bold">Hallo Semuanya!!</h1>
      <p className="mb-5 px">
        Website ini dibuat untuk menyelesaikan FinalProject Pemrograman Web yang diampu oleh dosen yang kece bapak Mujiyanto, M.Kom. <br>
      </br> Selanjutnya kita akan kenalan dengan anggota kelompok kami di next page
      </p>
      <button className="btn btn-primary">Profil</button>
    </div>
  </div>
</div>
  )
}
