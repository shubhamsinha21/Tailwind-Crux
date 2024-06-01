import React from 'react'
import Review from './Review'

const Testimonials = () => {
    return (
        <div id='testimonials' className='container'>
            <h2 className='sm:text-6xl mb-12 text-5xl max-w-2xl sm:font-semibold mx-2 font-body md:leading-snug'>Customer stories</h2>

            {/* primary-testimonials */}
            <div className="rounded-xl bg-white border justify-around py-10 flex flex-col lg:flex-row hover:border-orange-300 ">

                {/* left */}
                <div className='flex flex-col gap-12 p-6'>
                    <div className='h-4 w-fit'>
                        <img src='./assets/asset 44.svg' className='w-32' />
                    </div>

                    <h3 className='text-2xl leading-relaxed'>ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
                    <div id='tag-container' className='flex gap-3 flex-wrap'>

                        {/* tags */}
                        <div className='hover:border-yellow-600 hover:scale-105 cursor-pointer flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                            <i class="fa-solid fa-check"></i>
                            <span className='font-display font-medium'>Chromeless UI</span>
                        </div>

                        <div className='hover:border-yellow-600 hover:scale-105 cursor-pointer flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                            <i class="fa-solid fa-check"></i>
                            <span className='font-display font-medium'>Native spellcheck</span>
                        </div>

                        <div className='hover:border-yellow-600 hover:scale-105 cursor-pointer flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                            <i class="fa-solid fa-check"></i>
                            <span className='font-display font-medium'>Task time in menubar</span>
                        </div>

                        <div className='hover:border-yellow-600 hover:scale-105 cursor-pointer flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                            <i class="fa-solid fa-check"></i>
                            <span className='font-display font-medium'>
                                Notification count in the dock</span>
                        </div>

                        <div className='hover:border-yellow-600 hover:scale-105 cursor-pointer flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800'>
                            <i class="fa-solid fa-check"></i>
                            <span className='font-display font-medium'>Global hotkey to create task</span>
                        </div>

                    </div>
                    <p className='leading-relaxed font-display text-gray-500'>“ToDesktop provided us with a <span className='text-gray-800'>polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver new and improved features to our customers within days.”</p>

                    {/* user card */}
                    <div id='user-card' className='flex gap-4'>
                        <div id='user' className='w-12'>
                            <img src='../assets/asset 45.jpeg' className='rounded-full' alt='user' />
                        </div>
                        <div id='info' className='flex flex-col gap-0.5'>
                            <p className='text-gray-800 tracking-normal'>Zeb Evans</p>
                            <p className='text-gray-700'>Founder & CEO, <a className='cursor-pointer border-b-[2px] border-dotted border-gray-200 hover:border-solid hover:border-black hover:border-b-[1px]'>ClickUp</a></p>
                        </div>
                    </div>

                </div>

                {/* right */}
                <div className='flex items-end '>
                    <img src='./assets/asset 46.png' className='pl-12 w-full h-full' />
                </div>

            </div>

            {/* secondary-testimonials */}
            <div className='flex flex-col lg:flex-row gap-4 mt-8'>
                <Review />
                <Review />
                <Review />

            </div>

        </div>
    )
}

export default Testimonials