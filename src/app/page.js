'use client'
import { Inter } from 'next/font/google'
import { useSession } from "next-auth/react"
import Navbar from '@/components/navbar/Navbar'
import Hero from './../components/Hero';
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer';

const Section = dynamic (() => import ('@/components/section/Section'))

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <Navbar/>
        <Hero/>
        <Section/>
        <Footer/>
      </>
    )
  }
  return (
    <>
      <Navbar/>
      <Hero/>
      <Section/>
      <Footer/>
    </>
  )
}
