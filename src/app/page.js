import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Hero from './../components/Hero';
import dynamic from 'next/dynamic'

const Section = dynamic (() => import ('@/components/section/Section'))

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
