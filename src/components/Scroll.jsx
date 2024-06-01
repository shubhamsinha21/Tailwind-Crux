import React from 'react'
import Line1 from './Lines/Line1'
import Line2 from './Lines/Line2'
import Line3 from './Lines/Line3'

const Scroll = () => {
    return (
        <>
            {/* companies-container */}
            <div id="companies-container" className='flex flex-col gap-4'>

                {/* companies-title */}
                <div id="companies-title" className='flex justify-center gap-2'>
                    <img src='./assets/asset 2.svg' alt='title' className='translate-y-2' />
                    <span className='font-medium'>APPS POWERED BY TODESKTOP</span>
                    <img src='./assets/asset 2.svg' alt='title' className='translate-y-2 -scale-x-100' />
                </div>

                {/* companies */}
                <div id='lines-group' className='my-10 flex flex-col gap-4'>
                    <Line1/>
                    <Line2/>
                    <Line3/>
                </div>

            </div>
        </>
    )
}

export default Scroll