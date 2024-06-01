import React from 'react'
import KeyFeatures from './KeyFeatures'

const Essential = () => {
  return (
    <div className='border rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50'>
          <h3 className='text-4xl'>Essential</h3>
          <p className='text-gray-600 text-lg'>For simple desktop apps.</p>
          <p className='text-gray-600 text-xl'><span className='font-bold text-gray-900'>$99</span>/month</p>

          <p className='uppercase text-gray-800'>Key Features</p>

          <KeyFeatures/>

          <button className='border py-3 w-full rounded-lg text-primary cursor-pointer font-medium font-display hover:border-gray-800 hover:rounded-lg'>
            Read Docs
            </button>


        </div>
  )
}

export default Essential