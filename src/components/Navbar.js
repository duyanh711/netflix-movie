import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between p-4 absolute w-full items-center z-[100]'>
            <Link to="/"><h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1></Link>
            <div>
                <Link to="/signin"><button className='text-white pr-4'>Sign In</button></Link>
                <Link to="signup"><button className='text-white px-6 py-2 rounded bg-red-600 cursor-pointer transition hover:bg-red-700'>Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Navbar
