'use client'
import React from 'react'
import NavAdmin from './../../components/admin/NavAdmin';
import { useSession } from 'next-auth/react';

export default function page() {
    const {data : session} = useSession()
    return (
        <div className='min-h-screen bg-sky-400 flex'>
            <NavAdmin/>{
                session ? (
                    <div className='bg-white flex-grow my-2 mr-2 rounded-lg p-4'>loggin in {session.user.name}</div>
                ) : (
                    <>
                    </>
                )
            }
        </div>
    )
}
