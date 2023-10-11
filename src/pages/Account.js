import React from 'react'
import SavedShow from '../components/SavedShow'

const Account = () => {
    return (
        <>
            <div className='w-full text-white'>
                <img className=' opacity-30 sm:block absolute w-full h-[400px] object-cover md:object-fill md:' src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='' />
                <div className='w-full h-[400px] top-[25%] absolute'>
                    <h1 className='flex p-4 md:p-8 font-bold text-3xl md:text-4xl '>My Shows</h1>
                </div>
            </div>
            <SavedShow />
        </>
    )
}

export default Account
