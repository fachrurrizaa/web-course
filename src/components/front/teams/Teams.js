import Link from 'next/link'
import React from 'react'
import Button from '../../Button'
import TeamsCard from './TeamsCard'

export default function Teams() {
  return (
    <div className='min-h-screen w-full bg-white flex items-center flex-col'>
        <div className='flex flex-col items-center'>
            <h1 className='mb-20 mt-20 font-extrabold text-3xl'>Tim Kita</h1>
        </div>
        <div className='flex flex-wrap gap-28 justify-center items-center'>
            <TeamsCard name={"Muhammad Fachrur Riza"} nim={"21.11.4318"}/>
            <TeamsCard name={"Agil Tria Nugraha"} nim={"21.11.4282"}/>
            <TeamsCard name={"Laili Aulia Fitri"} nim={"21.11.4329"}/>
            <TeamsCard name={"Gusti Ayu Putu Febriyanti"} nim={"21.11.4326"}/>
            <TeamsCard name={"Nahdah Sakinatussyifa"} nim={"21.11.4261"}/>
        </div>
        <Link href="/">
          <Button className={"my-24 bg-[#028d94] hover:bg-[#02b2bb]"} content={"Back to Home"}/>
        </Link>
    </div>
  )
}
