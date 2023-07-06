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
        <div className='min-h-screen bg-teal-50 flex'>
            <NavAdmin/>{
            <div className='bg-teal-50 flex-grow m-3 rounded-lg p-4'>{children}</div>
            }
        </div>
    )
}
