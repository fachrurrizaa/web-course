export default function Hero() {
  return (
    <div className='hero-content max-w-full min-h-[90vh] justify-around flex-col lg:flex-row-reverse'>
        <img src='/assets/hero-image.png' className='max-w-2xl rounded-lg shadow-2xl' />
        <div>
            <h1 className='text-5xl font-bold text-[#160442] leading-tight'>Design Better & <br/>Faster Than Before.</h1>
            <p className='py-6 text-[#6B7193]'>Accelerate your work with our millions<br/> of ready-to-use design projects.</p>
            <button className='btn btn-primary rounded-full bg-[#642DFB]'>Browse Now</button>
        </div>
    </div>
  )
}
