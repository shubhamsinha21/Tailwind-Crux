import React from 'react'
import FAQ from './FAQ'

const FAQs = () => {

    return (
        <div className='container'>
            <h2 className='h2-style'>FAQs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-6 mt-6'>
               <FAQ/>
               <FAQ/>
               <FAQ/>
               <FAQ/>
               <FAQ/>
               <FAQ/>
            </div>
        </div>
    )
}

export default FAQs