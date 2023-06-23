import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'

import React from 'react'

export default function page() {
  return (
    <>
        <Navbar/>
        <div className="flex flex-col items-center">
            <div className="mr-[140px]">
                <h1 className="font-normal text-2xl text-[#160442] leading-[63px] text-center mt-16 mb-3">The Story Behind Project Web Course</h1>
            </div>
            <div className="flex mb-24 mt-16 gap-20 mr-32">
               
            </div>
            <div class="flex gap-32">
            </div>
        </div>
        <Footer/>
        <About/>
    </>
  )
}
