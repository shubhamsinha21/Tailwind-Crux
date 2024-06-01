import React from 'react'

const Review = () => {
  return (
    <div className='flex gradient-hover-outer'>

    <div className='flex flex-col gap-8 px-8 py-12'>

        <div className='flex gap-3 items-center'>
            <i className='fa-solid fa-code bg-blue-300 w-12 h-12 text-md justify-center flex items-center rounded-full'></i>
            <p className='font-display font-medium text-2xl'>Native APIs</p>
        </div>

        <p className='text-gray-700 tracking-wider leading-normal'>
            What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.
        </p>

        <div className='flex gap-3'>
            <div className='flex'>
            < div className='w-12 h-12 -mr-3 rounded-full flex justify-center items-center overflow-hidden'>
                <img src='./assets/asset 8.png' className='min-w-16 min-h-16' />
            </div>
            <div className='w-12 h-12 rounded-full border-white border overflow-hidden flex justify-center items-center'>
                <img src='./assets/asset 48.jpeg' className='min-w-12 2min-h-12' />
            </div>
            </div>

            <div className='flex flex-col gap-[0.5px]'>
                <p className='text-black text-lg'>Rick Pastoor</p>
                <a href='#' className='text-gray-600 hover:shadow-md w-fit'>Rise</a>

            </div>

        </div>

    </div>

</div>
  )
}

export default Review