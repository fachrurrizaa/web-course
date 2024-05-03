'use client'
import NavAdmin from './../../components/admin/NavAdmin';
import { useSession } from 'next-auth/react';
import ForbidenAccess from '../ForbidenAccess';

export default function page({children}) {
    const {data : session} = useSession()
    const email = 'mfriza69@gmail.com';
    const email1 ='fitriaaif@students.amikom.ac.id';
    const email2 = 'fmuh748@students.amikom.ac.id'

    if(session === null){
        return  (
            <h1>Wait bro</h1>
        )
    }
    if(session){
        if ((session?.user?.email !== email) && (session?.user?.email !== email1) && (session?.user?.email !== email2)){
            return (
                <ForbidenAccess/>
            )
        }
        else if ((session?.user?.email === email) || (session?.user?.email === email1) || (session?.user?.email === email2)){
            return (
                <div className='min-h-screen bg-teal-50 flex'>
                    <NavAdmin/>
                    <div className='bg-teal-50 flex-grow m-3 rounded-lg p-4'>{children}</div>
                </div>
            )
        }
    }
}
