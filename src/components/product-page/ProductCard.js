export default function ProductCard({ features }) {
    return (
        <div>
            <div className='flex flex-col w-96 h-[486px] bg-base-100 shadow-xl rounded-xl'>
                <figure className='pt-10 flex items-center'>
                    <img src='/assets/icon-figma.png' alt='figma-icon' className='rounded-xl object-cover h-14 w-14 mr-4 ml-8' />
                    <div>
                        <h5 className='text-[#151A26] font-semibold text-base'>Figma</h5>
                        <p className='text-[#A3A5AA] font-normal text-sm'>Project Included</p>
                    </div>
                </figure>
                <figure className='pt-5 flex items-center'>
                    <img src='/assets/icon-sketch.png' alt='sketch-icon' className='rounded-xl object-cover h-14 w-14 mr-4 ml-8' />
                    <div>
                        <h5 className='text-[#151A26] font-semibold text-base'>Sketch</h5>
                        <p className='text-[#A3A5AA] font-normal text-sm'>Project Included</p>
                    </div>
                </figure>
                <div className='card-body items-start pt-10'>
                    <div className='mb-5'>
                        <h5 className='text-[#151A26] font-semibold text-base mt-3'>Great Features</h5>{
                            features.split(',').map(( feature, index ) => (
                                <p key={ index } className='text-base font-normal text-[#A3A5AA] mt-3'>{ feature }</p>
                            ))
                        }
                    </div>
                    <div className='card-actions'>
                        <button className='btn btn-primary rounded-full py-3 w-80'>Download Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
