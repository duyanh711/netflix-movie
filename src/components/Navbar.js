import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between p-4 absolute w-full items-center z-[100]'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            <div>
                <button className='text-white pr-4'>Sign In</button>
                <button className='text-white px-6 py-2 rounded bg-red-600 cursor-pointer transition hover:bg-red-700'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
