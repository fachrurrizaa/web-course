import React from 'react'


export default function page() {
  return (
    <div className='hero-overlay bg-opacity-60 flex rounded-md  mt-5 mb-8 p-10 font-serif'>
       <h1 className='mb-5 text-3xl font-bold max-w-md'>VISI & MISI KAMI <br/></h1>
         <div className='w-1/2 pl-20 pr-40'>
            <p className="text-justify-center leading-relaxed " >
                Visi : Menjadi platform penyedia design terkemuka yang mampu memberdayakan individu untuk mencapai potensi designer yang kreatif dan inovatif.
            </p>
        </div>
        <div className='w-1/2 pl-15 pr-40'>
            <p className='text-justify-center leading-relaxed'>
                Misi : Menyediakan akses yang mudah, fleksibel dan terjangkau dengan materi design online yang berkualitas tinggi untuk pengguna web design guna meningkatkan keterampilan design, mengembangkan karier, hingga menambah portofolio para designer.
            </p>
        </div>
    </div>
  )
}
