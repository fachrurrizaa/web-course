import Image from 'next/image';
import Button from '../../Button';
import Check from "/public/assets/check-icon.svg";
import { useContext } from 'react';
import { Context } from '@/components/context/MyContext';
import { useRouter } from 'next/navigation';

export default function ProductCard({ features }) {
    const { isSubscribe } = useContext(Context);
    const router = useRouter()

    function subsHandler (){
        if(!isSubscribe){
            router.push('/pricing')
        }
    }
    return (
        <div className='flex flex-col w-96 h-[520px] bg-base-100 shadow-xl rounded-xl'>
            <figure className='pt-10 flex items-center'>
                <img src='/assets/icon-figma.png' alt='figma-icon' className='rounded-xl object-cover h-14 w-14 mr-4 ml-8' />
                <div>
                    <h5 className='text-[#004f4f] font-semibold text-base'>Figma</h5>
                    <p className='text-[#A3A5AA] font-normal text-sm'>Project Included</p>
                </div>
            </figure>
            <figure className='pt-5 flex items-center'>
                <img src='/assets/icon-sketch.png' alt='sketch-icon' className='rounded-xl object-cover h-14 w-14 mr-4 ml-8' />
                <div>
                    <h5 className='text-[#004f4f] font-semibold text-base'>Sketch</h5>
                    <p className='text-[#A3A5AA] font-normal text-sm'>Project Included</p>
                </div>
            </figure>
            <div className='mb-5 pt-8 ml-8'>
                <h5 className='text-[#004f4f] font-semibold text-base mt-3'>Great Features</h5>{
                    features.split(',').map(( feature, index ) => (
                        <div className='flex justify-between'>
                            <p key={ index } className='text-base font-normal text-[#A3A5AA] mt-3'>{ feature }</p>
                            <Image src={ Check } height={0} width={0} alt="check-icon" className="w-6 h-auto mr-8"/>
                        </div>
                    ))
                }
            </div>
            <Button className={"text-white w-[85%] bg-[#028d94] hover:bg-[#02b2bb] mx-auto"} click={()=>subsHandler()} content={"Download Now"}/>
        </div>
    )
}
