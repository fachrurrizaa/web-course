import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import About from '@/components/About';

export default function page() {
  return (
    <>
        <Navbar/>
        <About/>
        <Footer/>
    </>
  )
}
