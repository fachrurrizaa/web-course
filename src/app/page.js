import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar-type/Navbar'
import Section from '@/components/section/Section';
import Hero from './../components/Hero';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Section/>
    </>
  )
}
