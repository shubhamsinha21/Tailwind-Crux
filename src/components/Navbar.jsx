import React, { useState } from 'react'
const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const handleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <nav className='w-full px-3 py-3 flex bg-white justify-between items-center drop-shadow-lg fixed'>
      <a href='#' id='brand' className='flex gap-1 items-center font-semibold'>
        <img src='./assets/asset 0.png' className='object-cover max-w-10 max-h-10' alt='Logo' />
        <span className='text-lg font-semibold font-display'>ToDesktop</span>
      </a>

      <div id='nav-menu' className='hidden lg:flex gap-12'>
        <a href='#' className='font-medium hover:text-primary'>Pricing</a>
        <a href='#' className='font-medium hover:text-primary'>Docs</a>
        <a href='#' className='font-medium hover:text-primary'>Channels</a>
        <a href='#' className='font-medium hover:text-primary'>Blogs</a>
        <a href='#' className='font-medium hover:text-primary'>Login</a>
      </div>

      <button className='hidden md:flex gap-2 items-center border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-100 hover:border-gray-500'>
        <img src='./assets/asset 1.svg' alt="elctron" />
        <span>Electron Developers</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>

      <button className='px-2 lg:hidden' onClick={handleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>

      {toggle ?
        <div id='nav-dialog' className='fixed z-1 lg:hidden bg-white inset-0 px-3 py-1'>

          <div id='nav-bar' className='flex justify-between items-center'>
            <a href='#' id='brand' className='flex gap-1 items-center font-semibold'>
              <img src='./assets/asset 0.png' className='object-cover max-w-10 max-h-10' alt='Logo' />
              <span className='text-lg font-semibold font-display'>ToDesktop</span>
            </a>

            <button className='px-2 lg:hidden' onClick={handleMenu}>
              <i className="fa-solid fa-xmark"></i>

            </button>
          </div>

          <div className='mt-3'>
            <a href='#' className='font-medium  m-3 p-3 hover:bg-gray-100 block rounded-lg'>Pricing</a>
            <a href='#' className='font-medium  m-3 p-3 hover:bg-gray-100 block rounded-lg'>Docs</a>
            <a href='#' className='font-medium  m-3 p-3 hover:bg-gray-100 block rounded-lg'>Channels</a>
            <a href='#' className='font-medium  m-3 p-3 hover:bg-gray-100 block rounded-lg'>Blogs</a>
            <a href='#' className='font-medium  m-3 p-3 hover:bg-gray-100 block rounded-lg'>Login</a>
          </div>

          <div className='h-[1px] bg-gray-300'></div>
            <button className='mt-6 w-full flex gap-2 items-center px-6 py-3 rounded-md hover:bg-gray-200'>
              <img src='./assets/asset 1.svg' alt="elctron" />
              <span>Electron Developers</span>
            </button>


        </div> : null
      }


    </nav>
  )
}

export default Navbar