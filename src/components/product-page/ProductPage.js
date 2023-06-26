import React from 'react'
import ProductCard from './ProductCard'
import ProductImage from './ProductImage'

export default function ProductPage({ name, subtitle, features }) {
  return (
    <div className='my-12 px-32'>
        <h1 className='text-5xl font-bold text-[#004f4f] leading-tight'>{ name }</h1>
        <p className='ml-1 py-6 text-[#6B7193]'>{ subtitle }</p>
        <div className='mt-6 flex items-center justify-between'>
          <ProductImage />
          <ProductCard features={ features }/>
        </div>
        <div className='mt-12'>
          <p className='font-bold mb-4 text-lg'>About</p>
          <p className='text-[#6B7193] mb-4'>Sportly App UI Kit will help your Sport, Fitness, and Workout App products or services.<br/>
          Came with modern and sporty style, you can easily edit and customize all elements with<br/>
          components that can speed up your design process.
          </p>
          <p className='text-[#6B7193]'>Suitable for: </p>
          <ul className='text-[#6B7193]' typeof=''>
            <li> - Sport App</li>
            <li> - Fitness & GYM App</li>
            <li> - Workout App</li>
            <li> - Trainer & Tracker App</li>
            <li> - And many more</li>
          </ul>
        </div>
    </div>
  )
}
