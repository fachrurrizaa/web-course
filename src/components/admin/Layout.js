'use client'
import NavAdmin from './../../components/admin/NavAdmin';
import { useSession } from 'next-auth/react';
import ForbidenAccess from '../ForbidenAccess';

export default function page({children}) {
    const {data : session} = useSession()
    const email = 'mfriza69@gmail.com';

    if(!session){
        return  (
            <h1>Wait bro</h1>
        )
    }
    if (session.user.email !== email){
        return (
            <ForbidenAccess/>
        )
    }
    if (session.user.email === email){
        return (
            <div className='min-h-screen bg-teal-50 flex'>
                <NavAdmin/>{
                <div className='bg-teal-50 flex-grow m-3 rounded-lg p-4'>{children}</div>
                }
            </div>
        )
    }
}
