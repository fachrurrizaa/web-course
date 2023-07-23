'use client'
import { Inter } from 'next/font/google'
import Navbar from '@/components/front/navbar/Navbar'
import Hero from '../components/front/Hero';
import dynamic from 'next/dynamic'
import Footer from '@/components/front/Footer';

const Section = dynamic (() => import ('@/components/front/section/Section'))

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Hero/>
      <Section/>
      <Footer/>
    </div>
  )
}
