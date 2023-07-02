'use client'
import NavAdmin from './../../components/admin/NavAdmin';
import { useSession } from 'next-auth/react';

export default function page({children}) {
    const {data : session} = useSession()
    if (!session){
        return (
            <h1>login dulu</h1>
        )
    }

    return (
        <div className='min-h-screen bg-sky-900 flex'>
            <NavAdmin/>{
            <div className='bg-white flex-grow my-2 mr-2 rounded-lg p-4'>{children}</div>
            }
        </div>
    )
}
