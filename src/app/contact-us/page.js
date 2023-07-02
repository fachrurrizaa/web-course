'use client'
import Footer from '@/components/front/Footer';
import Navbar from '@/components/front/navbar/Navbar';
import React from 'react'
import Contact from '../../components/front/contact/Contact';

export default function page() {
  return (
    <>
      <Navbar/>
      <Contact/>
      <Footer/>
    </>
  )
}
