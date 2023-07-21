import React from 'react';

export default function Page() {
  return (
    <div className='hero-overlay bg-opacity-60 flex rounded-md mt-5 mb-8 p-10 font-serif'>
      <div className='w-1/2'>
        <h1 className='mb-5 text-3xl font-bold max-w-md'>
          SEJARAH PERUSAHAAN KAMI <br />
        </h1>
        <h4 className='text-justify-center leading-relaxed'>
          Web design telah menggunakan teknologi dan inovasi untuk meningkatkan pengalaman dalam belajar secara online, seperti penggunaan platform pembelajaran interaktif hingga pengembangan metode pembelajaran yang baru
        </h4>
        <button className='mt-5 px-4 py-2 bg-blue-500 text-white rounded-md'>
          Baca Selengkapnya
        </button>
      </div>
      <div className='w-1/2 pl-20 pr-40'>
        <div className='bg-blue-100 p-5 rounded-md'>
          <h1 className='mb-5 text-3xl font-bold max-w-md text-center'>VISI & MISI KAMI</h1>
          <div className='w-1/2 mx-auto mb-5'>
            <h2 className='text-xl font-semibold'>Visi:</h2>
            <p className='text-justify'>
              Menjadi platform penyedia design terkemuka yang mampu memberdayakan individu untuk mencapai potensi designer yang kreatif dan inovatif
            </p>
          </div>
          <div className='w-1/2 mx-auto'>
            <h2 className='text-xl font-semibold'>Misi:</h2>
            <p className='text-justify'>
              Menyediakan akses yang mudah,fleksibel dan terjangkau dengan materi design online yang berkualitas tinggi untuk pengguna web design guna meningkatkan keterampilan design,mengembangkan karier,hingga menambah portofolio para designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
